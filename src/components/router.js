import {createBrowserRouter} from "react-router-dom";
import {LoginPage} from "../pages/login/login";
import {
    CREATE_EVENT_PAGE_PATH, EVENT_PAGE_PATH, EVENTS_PAGE, FOUND_EVENTS_PAGE_PATH,
    HOME_PAGE_PATH, ISSUE_PAGE_PATH,
    LOGIN_PAGE_PATH,
    PROFILE_PAGE_PATH,
    REGISTRATION_PAGE_PATH, STATISTICS_PAGE_PATH
} from "../const/path-page";
import {RegistrationPage} from "../pages/registration/registration";
import {HomePage} from "../pages/home/home";
import {CreateEventPage} from "../pages/create-event/create-event";
import {ProfilePage} from "../pages/profile/profile";
import {SearchEvents} from "../pages/search-events/search-events";
import {StatisticsPage} from "../pages/statistics/statistics-page";
import {EventPage} from "../pages/event/event-page";
import {EventIssuesPage} from "../pages/event-issues/event-issues-page";
import {Events} from "../pages/events/events";

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
        path: FOUND_EVENTS_PAGE_PATH,
        element: <SearchEvents/>,
    },
    {
        path: STATISTICS_PAGE_PATH,
        element: <StatisticsPage/>,
    },
    {
        path: EVENT_PAGE_PATH,
        element: <EventPage/>,
    },
    {
        path: EVENTS_PAGE,
        element: <Events/>,
    },
    {
        path: ISSUE_PAGE_PATH,
        element: <EventIssuesPage/>,
    },
]);
