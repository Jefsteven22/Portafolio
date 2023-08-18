import './Styles/DarkMode.css'
import { useDispatch, useSelector } from 'react-redux'
import { setDarkModeG } from '../../store/slices/darkMode.slice'

const DarkMode = () => {

  const darkMode = useSelector(reducer => reducer.darkMode)
  const dispatch = useDispatch()

  const handleDarkMode = () => {
    if (darkMode) {
      dispatch(setDarkModeG(false))
      document.body.classList.remove('darkOn')
    } else {
      dispatch(setDarkModeG(true))
      document.body.classList.add('darkOn')
    }
  }

  return (
    <div onClick={handleDarkMode} className={`darkMode ${darkMode ? 'active' : ''}`}>
      <div className="darkMode__button"></div>
    </div>
  )
}

export default DarkMode