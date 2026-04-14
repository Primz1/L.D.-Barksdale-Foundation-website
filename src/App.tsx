import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import EventCalendar from './pages/EventCalendar'
import Contact from './pages/Contact'
import StaffDirectory from './pages/StaffDirectory'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/event-calendar" element={<EventCalendar />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/staff" element={<StaffDirectory />} />
          <Route path="/donate" element={<Contact />} />
          <Route path="/volunteer" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
