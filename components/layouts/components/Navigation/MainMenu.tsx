import { NAV_TAB_NAME } from '../../../../constants/Gnb';

const MainMenu = () => {
  return (
    <ul className="container_menu">
      <li>{NAV_TAB_NAME.TAB_1}</li>
      <li>{NAV_TAB_NAME.TAB_2}</li>
      <li>{NAV_TAB_NAME.TAB_3}</li>
      <li>{NAV_TAB_NAME.TAB_4}</li>
      <li>{NAV_TAB_NAME.TAB_5}</li>
    </ul>
  );
};

export default MainMenu;
