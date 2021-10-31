import React, {useState, useCallback} from 'react'
import './App.css';
import NewsList from './components/NewsList';
import Categories from './components/Categories';
import { Route } from 'react-router-dom'
import NewsPage from './pages/NewsPage'

function App() {
  // const [category, setCategory] = useState('all')
  // const onSelect = useCallback(category => setCategory(category), [])

  // return (
  //   <div>
  //     <Categories category={category} onSelect={onSelect}/>
  //     <NewsList category={category}/>

  //   </div>
  // )
  return <Route path="/:category?" component={NewsPage} />
}

export default App;
