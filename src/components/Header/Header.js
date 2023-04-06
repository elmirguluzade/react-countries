import Heading from './style'
import {BsMoon} from 'react-icons/bs'
import {useNavigate} from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  return (
    <Heading>
        <h3 onClick={() => navigate('/')}>Where in the world?</h3>
        <button><BsMoon /> Dark Mode</button>
    </Heading>
  )
}

export default Header