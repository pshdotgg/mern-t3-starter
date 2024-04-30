import { useQuery } from '@tanstack/react-query'
import './App.css'
import { Outlet } from 'react-router-dom'
import { healthCheck } from './api/api'

function App() {
  const { data, isLoading } = useQuery({
    queryKey: ['health'],
    queryFn: healthCheck,
  })

  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      <h1>{data}</h1>
      <Outlet />
    </div>
  )
}

export default App
