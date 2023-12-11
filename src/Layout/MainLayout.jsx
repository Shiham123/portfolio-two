import { Outlet } from 'react-router-dom';
import NavbarSection from '../Section/NavbarSection/NavbarSection';
import FooterSection from '../Section/FooterSection/FooterSection';

const MainLayout = () => {
  return (
    <div className="max-w-screen-[1620px] mx-auto px-16 py-8 bg-colorOne">
      <NavbarSection />
      <Outlet />
      <FooterSection />
    </div>
  );
};

export default MainLayout;
