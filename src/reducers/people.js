const initialState = []

const people = (state = initialState, action) => {
  switch (action.type) {
    // Set people
    case "people/set":
      return action.payload

    // Delete person
    case "people/delete":
      return state.filter((person) => person.name !== action.payload)

    // Edit person
    case "people/edit":
      return state.map((person) => {
        if (person.name === action.payload.originalPerson.name) {
          return action.payload.newPerson
        } else {
          return person
        }
      })

    // Add person
    case "people/add":
      return [...state, action.payload]

    default:
      return state
  }
}

export default people
