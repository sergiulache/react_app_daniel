import {
  setPeople,
  deletePerson,
  editPerson,
  addPerson,
} from "./actions/people"
import loadData from "./utils/loadData"

export const fetchData = async (dispatch) => {
  const data = await loadData()
  dispatch(setPeople(data))
}

export const handleDelete = (dispatch, name) => {
  dispatch(deletePerson(name))
}

export const handleEdit = (
  setPersonToEdit,
  setForm,
  setIsFormOpen,
  people,
  name
) => {
  const person = people.find((person) => person.name === name)
  setPersonToEdit(person)
  setForm(person)
  setIsFormOpen(true)
}

export const handleFormSubmit = (
  dispatch,
  personToEdit,
  form,
  setForm,
  setIsFormOpen,
  setPersonToEdit
) => {
  if (personToEdit.name !== "") {
    dispatch(editPerson(personToEdit, form))
    setForm({ name: "", department: 2 })
  } else {
    dispatch(addPerson(form))
    setPersonToEdit({ name: "", department: 2 })
  }
  setIsFormOpen(false)
  setPersonToEdit({ name: "", department: 0 })
}

// Filter the people data from the redux store
export const filterPeople = (people, activeFilter) => {
  return people.filter((person) => {
    return (
      (activeFilter.name
        ? person.name.toLowerCase().includes(activeFilter.name.toLowerCase())
        : true) &&
      (activeFilter.department
        ? person.department === activeFilter.department
        : true)
    )
  })
}
