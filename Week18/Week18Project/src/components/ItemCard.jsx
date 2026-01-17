import { Card, Button, Badge } from 'react-bootstrap'

// Card that shows one catalog entry.
const ItemCard = ({ item, onEdit, onDelete }) => (
  <Card className="catalog-card">
    <Card.Body>
      <div className="card-header">
        <Badge bg="light" text="dark">
          {item.category || 'Curated'}
        </Badge>
        <span className="card-id">#{item.id}</span>
      </div>
      <Card.Title>{item.title}</Card.Title>
      <Card.Text>{item.body}</Card.Text>
      <div className="card-actions">
        <Button size="sm" variant="outline-dark" onClick={() => onEdit(item)}>
          Edit
        </Button>
        <Button size="sm" variant="outline-danger" onClick={() => onDelete(item.id)}>
          Delete
        </Button>
      </div>
    </Card.Body>
  </Card>
)

export default ItemCard
