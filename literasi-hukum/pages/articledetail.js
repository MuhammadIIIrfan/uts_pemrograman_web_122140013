import { useParams } from 'react-router-dom'

export default function ArticleDetail() {
  const { id } = useParams()

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Detail Artikel</h1>
      <p>Menampilkan detail artikel dengan ID: {id}</p>
      <p>Fitur ini bisa dikembangkan untuk mengambil data spesifik berdasarkan ID.</p>
    </div>
  )
}
