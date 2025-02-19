import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import EventsPage,{loader as eventsLoader } from "../pages/EventsPage";
import RootLayout from "../layout/rootLayout";
import EventDetailPage, {loader as eventDetailLoader, deleteAction} from "../pages/EventDetailPage";
import EventLayout from "../layout/EventLayout";
import NewEventPage, {action as mainpulateAction} from "../pages/NewEventPage";
import EditPage from '../pages/EditPage';


const router = createBrowserRouter([
  {
    path: '/',
    element:<RootLayout/>,
    errorElement:<ErrorPage />,
    children : [
      {
        index: true,
        element: <HomePage/>,
       
      },
      {
        path:'/events',
        element: <EventLayout />,
        children: [
          {
            index: true,
            element: <EventsPage/>,
            // loader 함수는 이 페이지가 라우팅될때 자동으로 트리거되는 함수
            loader: eventsLoader,
              
          },
          {
            path: 'new',
            element:<NewEventPage />,
            action: mainpulateAction,
          },
          {
            path: ':eventId',
            element: <EventDetailPage />,
            loader: eventDetailLoader,
            action: deleteAction
          },
          {
            path: ':eventId/edit',
            element: <EditPage />,
            loader: eventDetailLoader,
            action: mainpulateAction,
          }
        ],
      }
      


    ]
    
  },

]);

export default router;