const loadData = async () => {
  const response = await fetch(
    "https://webackit.com/wp-content/uploads/people.json"
  )
  const data = await response.json()
  return data
}

export default loadData
