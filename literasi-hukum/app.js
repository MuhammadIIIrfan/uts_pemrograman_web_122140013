import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'
import { AuthProvider } from './context/AuthContext'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes />
        <Footer />
      </Router>
    </AuthProvider>
  )
}
