import { Outlet } from 'react-router-dom';
import NavbarSection from '../Section/NavbarSection/NavbarSection';
import FooterSection from '../Section/FooterSection/FooterSection';

const MainLayout = () => {
  return (
    <>
      <NavbarSection />
      <Outlet />
      <FooterSection />
    </>
  );
};

export default MainLayout;
