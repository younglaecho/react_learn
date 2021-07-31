import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';

const NewsListBlock = styled.div`
  box-siizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;


const NewsList = ({category}) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === 'all'? '' : `&category=${category}`
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=460202b9f6ca4820b3e75a60ca9a58bb`
        )
        setArticles(response.data.articles);
      } catch(e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category])

  if (loading) {
    return <NewsListBlock>대기 중...</NewsListBlock>
  }

  if (!articles) { // article 값이 아직 설정되지 않았을 떄 article은 null이 되고 여기에 map 메소드를 사용하면, 렌더링 과정에서 오류가 발생한다.
    return null    // 따라서 로드 되어야 할 값들을 map을 이용해서 나열할 때, 반드시 이러한 작업을 해야한다.
  }
  return (
    <NewsListBlock> 
      {articles.map(article => (
        <NewsItem key={article.url} article={article}></NewsItem>
      ))}
    </NewsListBlock>
  );
};

export default NewsList;