import { useReducer, useRef, useEffect } from 'react'
import { questionReducer, initialState } from '../reducers/questionReducer'

export default function Ask() {
  const [state, dispatch] = useReducer(questionReducer, initialState)
  const inputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (state.question.trim() === '') {
      alert('Pertanyaan tidak boleh kosong!')
      return
    }

    console.log('Pertanyaan dikirim:', state.question)
    dispatch({ type: 'SUBMIT' })

    setTimeout(() => {
      dispatch({ type: 'RESET' })
    }, 3000)
  }

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Tanyakan Sesuatu</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          ref={inputRef}
          value={state.question}
          onChange={(e) =>
            dispatch({ type: 'SET_QUESTION', payload: e.target.value })
          }
          className="w-full p-3 border rounded mb-4"
          rows={5}
          placeholder="Tulis pertanyaan Anda di sini..."
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Kirim
        </button>
      </form>

      {state.submitted && (
        <p className="mt-4 text-green-600">Pertanyaan berhasil dikirim!</p>
      )}
    </div>
  )
}