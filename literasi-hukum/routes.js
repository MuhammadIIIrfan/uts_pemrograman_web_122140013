import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Articles from './pages/Articles'
import ArticleDetail from './pages/ArticleDetail'
import Ask from './pages/Ask'
import NotFound from './pages/NotFound'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/articles/:id" element={<ArticleDetail />} />
      <Route path="/ask" element={<Ask />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
