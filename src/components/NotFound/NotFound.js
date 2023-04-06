import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
    
    useEffect(() => {
        const redirecter = setTimeout(() => navigate('/'), 1500)
        return () => clearTimeout(redirecter)
    }, [navigate])

  return (
    <>
		<h2>Page not found. </h2>
        <p>You are redirecting to home page...</p>
	</>
  )
}

export default NotFound