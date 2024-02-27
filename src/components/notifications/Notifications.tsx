import { useLoaderData } from "react-router-dom";

interface notificationType{
    id:string,
    text:string,
    time:string

} 
interface notificationLet{
    notification:[]
}

const Notification:React.FC<notificationType>=()=> {
    let notification:notificationLet=useLoaderData()
   
    return (
        <div className="notification-child-outer">
            <div className="notification-child-inner">
                <div className="notification-child-wrapper">
                   {notification.id}
                        <div className="notification-child-card">
                        <div className="icon"></div>
                        <div className="notification-text">
                             
                        </div>
                        <div className="notification-time">
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
export default Notification

export const loadAllNotifications=async()=>{
    try {
        let data=await fetch('http://localhost:3000/notifications') 
        let response=await data.json()
        return response
    } catch (error) {
        
    }
   
}