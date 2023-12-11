import { NavLink } from 'react-router-dom';
import LogoLight from '../../assets/_06cc4017-b38b-4b61-a4a2-2871c9b6d694.jpg';

import { FaBars } from 'react-icons/fa';
import UseTheme from '../../Hooks/useTheme';

import { CiDark, CiLight } from 'react-icons/ci';

const routeData = [
  { label: 'Home', to: '/' },
  { label: 'Contact', to: '/contact' },
  { label: 'Education', to: '/education' },
  { label: 'Experience', to: '/experience' },
  { label: 'Project', to: '/project' },
];

const NavbarSection = () => {
  const { changeTheme, mode } = UseTheme();

  return (
    <div>
      <div className="navbar bg-colorOne px-8 py-4 dark:bg-colorFour rounded-lg shadow-lg shadow-colorTwo dark:shadow-lg dark:shadow-colorFive">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden">
              <FaBars />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {routeData.map((item, index) => {
                const { label, to } = item;
                return (
                  <div key={index}>
                    <NavLink
                      to={to}
                      className={({ isActive }) =>
                        isActive
                          ? 'font-playfairDisplay text-xl font-semibold tracking-wider'
                          : 'font-playfairDisplay text-xl tracking-wider'
                      }
                    >
                      <li className="hover:bg-colorThree px-4 py-2 rounded-lg duration-300 hover:text-colorOne">
                        {label}
                      </li>
                    </NavLink>
                  </div>
                );
              })}
            </ul>
          </div>
          <NavLink to={'/'}>
            <div className="flex justify-center items-center gap-4">
              <img
                src={LogoLight}
                width={50}
                height={50}
                className="rounded-full"
                alt=""
              />
              <h1 className="font-caveat text-3xl font-bold">Shiham</h1>
            </div>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <div className="flex gap-8">
              {routeData.map((item, index) => {
                const { label, to } = item;
                return (
                  <div key={index}>
                    <NavLink
                      to={to}
                      className={({ isActive }) =>
                        isActive
                          ? 'font-playfairDisplay text-xl font-semibold tracking-wider'
                          : 'font-playfairDisplay text-xl tracking-wider'
                      }
                    >
                      <li className="dark:text-colorFive hover:bg-colorThree px-4 py-2 rounded-lg duration-300 hover:text-colorOne">
                        {label}
                      </li>
                    </NavLink>
                  </div>
                );
              })}
            </div>
          </ul>
        </div>
        <div className="navbar-end">
          <button onClick={changeTheme}>
            {mode === 'light' ? (
              <CiLight size={40} color="#001c55" />
            ) : (
              <CiDark size={40} color="yellow" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavbarSection;
