import ChangePassword from "../../auth/ChangePassword";
import Profile from "../../services/Profile";

export const ServiceTabsData = [
    {
        eventKey: "profile",
        title: "Profile",
        component: <Profile />,
        url: "/services/profile"
    },
    {
        eventKey: "change_password",
        title: "Change Password",
        component: <ChangePassword />,
        url: "/services/change_password"
    },
    {
        eventKey: "schedule_meeting",
        title: "Schedule Meeting",
        component: <Profile />,
        url: "/services/schedule_meeting"
    },
    {
        eventKey: "up_coming_meeting",
        title: "Meetings",
        component: <Profile />,
        url: "/services/up_coming_meeting"
    }
]