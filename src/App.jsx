import React from 'react'
import './index.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import WriteArticle from './pages/WriteArticle'
import GenerateImage from './pages/Generateimages'
import Resumereview from './pages/Resumereview'
import RemoveBackground from './pages/RemoveBackground'
import Community from './pages/Community'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ai' element={<Layout/>}> 
          <Route index element={<Dashboard/>}/>
          <Route path='write-article' element={<WriteArticle/>}/>
          <Route path='generate-image' element={<GenerateImage/>}/>
          <Route path='review-resume' element={<Resumereview/>}/>
          <Route path='remove-background' element={<RemoveBackground/>}/>
          <Route path='remove-object' element={<RemoveBackground/>}/>
          <Route path='community' element={<Community/>}/>
          
        </Route>
      </Routes>

    </div>
  )
}

export default App
