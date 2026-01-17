import { Container } from 'react-bootstrap'
import PageHeader from '../components/PageHeader.jsx'

// Home page with a short intro.
const Home = () => (
  <>
    <PageHeader
      title="Media Catalog"
      subtitle="Welcome to your media catalog!"
    />
    <section className="page-section">
      <Container>
        <p>
          This app uses React Router for pages and MockAPI for API
          requests. Visit the Catalog page to add, edit, or delete items.
        </p>
      </Container>
    </section>
  </>
)

export default Home
