export const healthCheck = async () => {
  const response = await fetch('http://localhost:3000/health')
  const data = await response.text()
  return data
}
