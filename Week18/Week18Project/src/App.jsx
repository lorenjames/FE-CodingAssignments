import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Catalog from './pages/Catalog.jsx'
import About from './pages/About.jsx'
import NotFound from './pages/NotFound.jsx'

const App = () => (
  <Routes>
    {/* Layout wraps every page with nav + footer */}
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
)

export default App
