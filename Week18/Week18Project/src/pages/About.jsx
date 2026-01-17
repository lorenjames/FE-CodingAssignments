import { Container } from 'react-bootstrap'
import PageHeader from '../components/PageHeader.jsx'

// About page with project notes.
const About = () => (
  <>
    <PageHeader
      title="About my final project"
      subtitle="Week 18 final project."
    />
    <section className="page-section">
      <Container>
        <p>
          This project has 10 custom components which can be found in: src/components/ and 4 page components in src/pages/.
          I chose to use MockAPI because it supports all CRUD endpoints and is easy to use.

        </p>
      </Container>
    </section>
  </>
)

export default About
