const proxyUrl = "https://corsproxy.io/?"
const targetUrl = "https://webackit.com/wp-content/uploads/people.json"

const loadData = async () => {
  const response = await fetch(proxyUrl + targetUrl)
  const data = await response.json()
  return data
}

export default loadData
