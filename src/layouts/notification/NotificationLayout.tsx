import { Outlet } from "react-router-dom"

 

function NotificationLayout() {
  return (
    <>
    <div className="notificationlayout-outer">
        <div className="notification-inner">
            <div className="notification-layout-wrapper">
            <h3 className="header-title">
                           notifications
            </h3>

            <Outlet/>
            </div>
        </div>
    </div>
    </>
  )
}

export default NotificationLayout