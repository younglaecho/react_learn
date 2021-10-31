import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import NewsItem from './NewsItem'
import usePromise from '../lib/usePromise'

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding {
      left: 1rem;
      right: 1rem;
    }
  }
`

// const sampleArticle = {
//   title: '제목',
//   description: '내용',
//   url: 'https://google.com',
//   urlToImage: 'https://via.placeholder.com/160'
// }


const NewsList = ({category}) => {
  // const [articles, setArticles] = useState(null)
  // const [loading, setLoading ] = useState(false)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true)
  //     try { 
  //       const query = category==='all'? '' : 'category='+category+'&'
  //       const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr&${query}apiKey=460202b9f6ca4820b3e75a60ca9a58bb`)
  //       setArticles(response.data.articles)
  //     } catch(e) {
  //       console.log(e)
  //     }
  //     setLoading(false)
  //   }
  //   fetchData()
  // }, [category])
  const [loading, response, error] =usePromise(()=> {
    const query = category === 'all' ? '' : `&category=${category}`
    return axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=460202b9f6ca4820b3e75a60ca9a58bb`)
  }, [category])
  if (loading) {
    return <NewsListBlock>대기 중</NewsListBlock>
  }

  if (error) {
    return <NewsListBlock>에러 발생!</NewsListBlock>
  }
  if (!response) {
    return null
  }

  const {articles} = response.data
  return (
    <NewsListBlock>
      {articles.map(article => (
        <NewsItem key={article.url} article={article}/>
      ))}
    </NewsListBlock>
  )
}


export default NewsList