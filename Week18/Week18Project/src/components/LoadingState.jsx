import { Spinner } from 'react-bootstrap'

// Simple loading pill shown while fetching data.
const LoadingState = ({ label = 'Loading...' }) => (
  <div className="loading-state">
    <Spinner animation="border" role="status" size="sm" />
    <span>{label}</span>
  </div>
)

export default LoadingState
