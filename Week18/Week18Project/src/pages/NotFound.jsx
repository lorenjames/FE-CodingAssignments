import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// Fallback page for unknown routes.
const NotFound = () => (
  <section className="not-found">
    <Container>
      <h1>Page not found</h1>
      <p>The shelf is still growing. Head back to the homepage to explore.</p>
      <Button as={Link} to="/" variant="dark">
        Return home
      </Button>
    </Container>
  </section>
)

export default NotFound
