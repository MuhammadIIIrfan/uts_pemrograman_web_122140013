import PropTypes from 'prop-types'

export default function ArticleCard({ title, summary, onClick }) {
  return (
    <div onClick={onClick} className="border p-4 shadow mb-4 cursor-pointer">
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{summary}</p>
    </div>
  )
}

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}
