import { Alert } from 'react-bootstrap'

// Reusable alert for success and error messages.
const AlertBanner = ({ message, variant = 'info' }) => {
  if (!message) return null
  return (
    <Alert variant={variant} className="mt-3">
      {message}
    </Alert>
  )
}

export default AlertBanner
