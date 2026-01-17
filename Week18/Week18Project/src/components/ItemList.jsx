import { Row, Col } from 'react-bootstrap'
import ItemCard from './ItemCard.jsx'
import EmptyState from './EmptyState.jsx'

// List of cards for all items.
const ItemList = ({ items, onEdit, onDelete }) => {
  // Show a message when there is no data yet.
  if (!items.length) {
    return (
      <EmptyState
        title="No entries yet"
        body="Create a new entry above to start filling the catalog."
      />
    )
  }

  return (
    <Row className="g-4">
      {items.map((item) => (
        <Col md={6} lg={4} key={item.id}>
          <ItemCard item={item} onEdit={onEdit} onDelete={onDelete} />
        </Col>
      ))}
    </Row>
  )
}

export default ItemList
