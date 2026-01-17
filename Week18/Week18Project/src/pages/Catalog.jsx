import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import PageHeader from '../components/PageHeader.jsx'
import ItemForm from '../components/ItemForm.jsx'
import ItemList from '../components/ItemList.jsx'
import LoadingState from '../components/LoadingState.jsx'
import AlertBanner from '../components/AlertBanner.jsx'

// Online API used for CRUD requests.
const API_BASE = 'https://696b16f9624d7ddccaa037f0.mockapi.io/api/v1'
const API_RESOURCE = 'media'
const API_URL = `${API_BASE}/${API_RESOURCE}`

const Catalog = () => {
  // State for our list and UI messages.
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [editingItem, setEditingItem] = useState(null)
  const [notice, setNotice] = useState('')

  // Load items from MockAPI when the page starts.
  useEffect(() => {
    const loadItems = async () => {
      try {
        setLoading(true)
        const response = await fetch(API_URL)
        if (!response.ok) throw new Error('Failed to load items.')
        const data = await response.json()
        setItems(data)
        setError('')
      } catch (fetchError) {
        setError(fetchError.message)
      } finally {
        setLoading(false)
      }
    }

    loadItems()
  }, [])

  // Create a new item through the API.
  const handleCreate = async (payload) => {
    try {
      setNotice('')
      setError('')
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!response.ok) throw new Error('Failed to create entry.')
      const newItem = await response.json()
      setItems((prev) => [newItem, ...prev])
      setNotice('Entry created.')
    } catch (createError) {
      setError(createError.message)
    }
  }

  // Update an item through the API.
  const handleUpdate = async (id, payload) => {
    try {
      setNotice('')
      setError('')
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!response.ok) throw new Error('Failed to update entry.')
      const data = await response.json()
      setItems((prev) =>
        prev.map((item) => (item.id === id ? { ...item, ...data } : item))
      )
      setEditingItem(null)
      setNotice('Entry updated.')
    } catch (updateError) {
      setError(updateError.message)
    }
  }

  // Delete an item through the API.
  const handleDelete = async (id) => {
    try {
      setNotice('')
      setError('')
      const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' })
      if (!response.ok) throw new Error('Failed to delete entry.')
      setItems((prev) => prev.filter((item) => item.id !== id))
      setNotice('Entry deleted.')
    } catch (deleteError) {
      setError(deleteError.message)
    }
  }

  return (
    <>
      <PageHeader
        title="Catalog manager"
        subtitle="Add, Edit or Delete items for the Media Catalog."
      />
      <section className="catalog-section">
        <Container>
          <ItemForm
            editingItem={editingItem}
            onCreate={handleCreate}
            onUpdate={handleUpdate}
            onCancel={() => setEditingItem(null)}
          />
          {error ? <AlertBanner message={error} variant="danger" /> : null}
          {notice ? <AlertBanner message={notice} variant="success" /> : null}
          {loading ? (
            <LoadingState label="Loading catalog..." />
          ) : (
            <ItemList
              items={items}
              onEdit={(item) => setEditingItem(item)}
              onDelete={handleDelete}
            />
          )}
        </Container>
      </section>
    </>
  )
}

export default Catalog
