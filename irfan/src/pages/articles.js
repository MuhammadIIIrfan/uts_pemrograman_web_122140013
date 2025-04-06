import { useState, useMemo } from 'react'
import useFetchData from '../hooks/useFetchData'
import ArticleCard from '../components/ArticleCard'
import SearchBar from '../components/SearchBar'
import { useNavigate } from 'react-router-dom'

export default function Articles() {
  const { data, loading, error } = useFetchData('https://api.example.com/articles')
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const filteredArticles = useMemo(() => {
    if (!data) return []
    return data.filter(article =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [data, searchTerm])

  if (loading) return <p>Memuat artikel...</p>
  if (error) return <p>Gagal mengambil data: {error.message}</p>

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Artikel Hukum</h1>
      <SearchBar
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredArticles.length === 0 ? (
        <p>Tidak ditemukan artikel yang cocok.</p>
      ) : (
        filteredArticles.map((article) => (
          <ArticleCard
            key={article.id}
            title={article.title}
            summary={article.summary}
            onClick={() => navigate(`/articles/${article.id}`)}
          />
        ))
      )}
    </div>
  )
}