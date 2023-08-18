import { useDispatch, useSelector } from 'react-redux';
import { setMenuG } from '../../store/slices/menu.slice';
import './Styles/GridMenu.css'


const GridMenu = () => {
  const menu = useSelector((reducer) => reducer.menu);
  const dispatch = useDispatch();
  
  const handleMenu = () => {
    if (menu) {
      dispatch(setMenuG(false));
    } else {
      dispatch(setMenuG(true));
    }
  }

  return (
    <div onClick={handleMenu} className={`nav__toggle ${menu ? 'open' : ''}`}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default GridMenu;
