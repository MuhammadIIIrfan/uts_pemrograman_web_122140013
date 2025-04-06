import PropTypes from 'prop-types'

export default function SearchBar({ value, onChange }) {
  return (
    <div className="mb-6">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Cari artikel hukum..."
        className="w-full p-3 border rounded"
      />
    </div>
  )
}

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}