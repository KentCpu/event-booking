import {createBrowserRouter} from "react-router-dom";
import {LoginPage} from "../pages/login/login";
import {CREATE_EVENT_PAGE_PATH, HOME_PAGE_PATH, LOGIN_PAGE_PATH, REGISTRATION_PAGE_PATH} from "../const/path-page";
import {RegistrationPage} from "../pages/registration/registration";
import {HomePage} from "../pages/home/home";
import {CreateEventPage} from "../pages/create-event/create-event";

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
]);
