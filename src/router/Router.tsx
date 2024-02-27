import { Route, createBrowserRouter, createRoutesFromChildren } from "react-router-dom";
import NavbarLayout from "../layouts/header/NavbarLayout";
import Home from "../pages/home/Home";
 
import Profile from "../pages/profile/Profile";
import Menu from "../pages/menu/Menu";
import NotificationLayout from "../layouts/notification/NotificationLayout";
import Notifications from "../pages/notification/Notifications";
import { loadAllNotifications } from "../components/notifications/Notifications";

export const router=createBrowserRouter(
    createRoutesFromChildren(
        <Route path='/' element={<NavbarLayout scroll={200}/>}>
            <Route index element={<Home/>}/>
            <Route path='notification' element={<NotificationLayout/>}>
                <Route index loader={loadAllNotifications} element={<Notifications/>}/>
            </Route>
            <Route path='menu' element={<Menu/>}/>
            <Route path='profile' element={<Profile/>}/>
        </Route>
    )
)