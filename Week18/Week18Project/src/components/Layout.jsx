import { Outlet } from 'react-router-dom'
import AppNavbar from './AppNavbar.jsx'
import AppFooter from './AppFooter.jsx'

// Layout holds the shared header/footer and page content area.
const Layout = () => (
  <div className="app-shell">
    <AppNavbar />
    <main className="app-main">
      <Outlet />
    </main>
    <AppFooter />
  </div>
)

export default Layout
