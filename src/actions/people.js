export const setPeople = (people) => ({
  type: "people/set",
  payload: people,
})

export const deletePerson = (name) => ({
  type: "people/delete",
  payload: name,
})

export const editPerson = (originalPerson, newPerson) => ({
  type: "people/edit",
  payload: { originalPerson, newPerson },
})

export const addPerson = (person) => ({
  type: "people/add",
  payload: person,
})
