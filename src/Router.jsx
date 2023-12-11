import { createBrowserRouter } from 'react-router-dom';

import MainLayout from './Layout/MainLayout';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import HomePage from './Pages/HomePage/HomePage';
import ContactPage from './Pages/ContactPage/ContactPage';
import ProjectPage from './Pages/ProjectPage/ProjectPage';
import EducationPage from './Pages/EducationPage/EducationPage';
import ExperiencePage from './Pages/Experience/ExperiencePage';

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '/project', element: <ProjectPage /> },
      { path: '/education', element: <EducationPage /> },
      { path: '/experience', element: <ExperiencePage /> },
    ],
  },
]);

export default Routes;
