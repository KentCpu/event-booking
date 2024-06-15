import {createBrowserRouter} from "react-router-dom";
import {LoginPage} from "../pages/login/login";
import {
    CREATE_EVENT_PAGE_PATH, EVENTS_PAGE_PATH,
    HOME_PAGE_PATH,
    LOGIN_PAGE_PATH,
    PROFILE_PAGE_PATH,
    REGISTRATION_PAGE_PATH, STATISTICS_PAGE_PATH
} from "../const/path-page";
import {RegistrationPage} from "../pages/registration/registration";
import {HomePage} from "../pages/home/home";
import {CreateEventPage} from "../pages/create-event/create-event";
import {ProfilePage} from "../pages/profile/profile";
import {Events} from "../pages/events/events";
import {StatisticsPage} from "../pages/statistics/statistics-page";

export const router = createBrowserRouter([
    {
        path: LOGIN_PAGE_PATH,
        element: <LoginPage/>,
    },
    {
        path: REGISTRATION_PAGE_PATH,
        element: <RegistrationPage/>,
    },
    {
        path: HOME_PAGE_PATH,
        element: <HomePage/>,
    },
    {
        path: CREATE_EVENT_PAGE_PATH,
        element: <CreateEventPage/>,
    },
    {
        path: PROFILE_PAGE_PATH,
        element: <ProfilePage/>,
    },
    {
        path: EVENTS_PAGE_PATH,
        element: <Events/>,
    },
    {
        path: STATISTICS_PAGE_PATH,
        element: <StatisticsPage/>,
    },
]);
