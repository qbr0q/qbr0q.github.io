import { createBrowserRouter } from "react-router-dom";
import MainPage from './Pages/MainPage/MainPage'
import VacancyDetails from './Pages/VacancyDetailsPage/VacancyDetails'
import Team from "./Pages/TeamPage/Team";
import Account from './Pages/AccountPage/Account';
import Help from './Pages/HelpPage/Help'
import ErrorPath from "./Pages/ErrorPage/ErrorPath";

const Routers = createBrowserRouter([
    {
      path: "/",
      element: <MainPage/>
    },
    {
      path: "/vacancy/:id",
      element: <VacancyDetails/>
    },
    {
      path: '/team',
      element: <Team/>
    },
    {
      path: '/account/auth',
      element: <Account/>
    },
    {
      path: '/help',
      element: <Help/>
    },
    {
      path: '*',
      element: <ErrorPath/>
    }
  ]);

export default Routers