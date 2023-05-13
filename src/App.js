import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Filter from "./components/Filter"
import DataTable from "./components/Table"
import AddPersonButton from "./components/AddPersonButton"
import PersonForm from "./components/PersonForm"
import Popup from "./components/Popup"
import Box from "@mui/material/Box"
import {
  fetchData,
  handleDelete,
  handleEdit,
  handleFormSubmit,
  filterPeople,
} from "./dataFunctions"

const App = () => {
  // State for person to edit
  const [personToEdit, setPersonToEdit] = useState({ name: "", department: 0 })

  // State for form
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [form, setForm] = useState({ name: "", department: 0 })

  // State for filter
  const [filter, setFilter] = useState({ name: "", department: "" })
  const [activeFilter, setActiveFilter] = useState({ name: "", department: "" })

  // Get people data from redux store
  const people = useSelector((state) =>
    filterPeople(state.people, activeFilter)
  )

  // Handle action select
  const handlePersonActionSelect = (action, name) => {
    if (action === "Delete") {
      handleDelete(dispatch, name)
    } else if (action === "Edit") {
      handleEdit(setPersonToEdit, setForm, setIsFormOpen, people, name)
    }
  }

  // Handle add person click
  const handleAddPersonClick = () => {
    setForm({ name: "", department: 2 })
    setIsFormOpen(true)
  }

  // Handle field change
  const handleFieldChange = (field, value) => {
    if (field === "department") {
      value = parseInt(value, 10)
    }
    setForm((prevForm) => ({ ...prevForm, [field]: value }))
  }

  // Handle filter change
  const handlePersonFilterChange = (filters) => {
    setFilter(filters)
  }

  // Handle search click
  const applyPersonFilter = () => {
    setActiveFilter(filter)
  }

  // Handle form submit
  const handlePersonFormSubmit = () => {
    handleFormSubmit(
      dispatch,
      personToEdit,
      form,
      setForm,
      setIsFormOpen,
      setPersonToEdit
    )
  }

  // Redux dispatch
  const dispatch = useDispatch()

  // Load data on mount
  useEffect(() => {
    fetchData(dispatch)
  }, [dispatch])

  return (
    <Box m={2} pl={3}>
      <div className="App">
        <h1>People App</h1>
        <Filter
          onFilterChange={handlePersonFilterChange}
          onSearchClick={applyPersonFilter}
        />
        <DataTable data={people} onActionSelect={handlePersonActionSelect} />
        <AddPersonButton onClick={handleAddPersonClick} />
        <Popup
          open={isFormOpen}
          onClose={() => {
            setIsFormOpen(false)
            setPersonToEdit({ name: "", department: 0 })
          }}
          title={personToEdit.name ? "Edit Person" : "Add Person"}
        >
          <PersonForm
            person={personToEdit || { name: "", department: 2 }}
            onSubmit={handlePersonFormSubmit}
            form={form}
            handleFieldChange={handleFieldChange}
          />
        </Popup>
      </div>
    </Box>
  )
}

export default App
