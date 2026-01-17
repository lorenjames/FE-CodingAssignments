import { Container } from 'react-bootstrap'

// Reusable page title block.
const PageHeader = ({ title, subtitle }) => (
  <section className="page-header">
    <Container>
      <h1>{title}</h1>
      {subtitle ? <p className="page-subtitle">{subtitle}</p> : null}
    </Container>
  </section>
)

export default PageHeader
