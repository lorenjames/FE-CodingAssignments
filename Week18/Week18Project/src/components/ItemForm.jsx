import { useEffect, useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'

// Default empty values for the form.
const emptyForm = {
  title: '',
  body: '',
  category: '',
}

// Form used to create or edit an item.
const ItemForm = ({ editingItem, onCreate, onUpdate, onCancel }) => {
  const [formData, setFormData] = useState(emptyForm)
  const isEditing = Boolean(editingItem)

  // Keep form values in sync with the selected item.
  useEffect(() => {
    if (editingItem) {
      setFormData({
        title: editingItem.title,
        body: editingItem.body,
        category: editingItem.category || '',
      })
      return
    }
    setFormData(emptyForm)
  }, [editingItem])

  // Update state when inputs change.
  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Submit either a create or update request.
  const handleSubmit = (event) => {
    event.preventDefault()
    if (!formData.title.trim() || !formData.body.trim()) return

    if (isEditing) {
      onUpdate(editingItem.id, formData)
      return
    }
    onCreate(formData)
  }

  // Clear the form.
  const handleReset = () => {
    setFormData(emptyForm)
    if (isEditing) onCancel()
  }

  return (
    <Form className="form-card" onSubmit={handleSubmit}>
      <h3>{isEditing ? 'Edit entry' : 'Add entry'}</h3>
      <Row className="g-3">
        <Col md={6}>
          <Form.Label>Title</Form.Label>
          <Form.Control
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Ex: Twister"
          />
        </Col>
        <Col md={6}>
          <Form.Label>Category</Form.Label>
          <Form.Control
            name="category"
            value={formData.category || ''}
            onChange={handleChange}
            placeholder="Movie, Album, Book"
          />
        </Col>
        <Col md={12}>
          <Form.Label>Notes</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="body"
            value={formData.body}
            onChange={handleChange}
            placeholder="Notes about the item."
          />
        </Col>
      </Row>
      <div className="form-actions">
        <Button type="submit" variant="dark">
          {isEditing ? 'Save changes' : 'Create entry'}
        </Button>
        <Button type="button" variant="outline-secondary" onClick={handleReset}>
          {isEditing ? 'Cancel edit' : 'Clear'}
        </Button>
      </div>
    </Form>
  )
}

export default ItemForm
