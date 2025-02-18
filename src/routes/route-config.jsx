import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import EventsPage from "../pages/EventsPage";
import RootLayout from "../layout/rootLayout";
import EventDetailPage from "../pages/EventDetailPage";
import EventLayout from "../layout/EventLayout";

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
            // loader 함수는 이 페이지가 라우팅될때 자동으로 트리거되는 함수수
            loader: async() => {
              const res = await fetch(`http://localhost:9000/api/events`);
              const jsonData = await res.json();
              
              //console.log(jsonData);

              // loader가 리턴한 데이터는 라우팅된 페이지와 
              // 그 컴포넌트의 하위 컴포넌트에서 언제든 뽑아서 사용할 수 있음음
              return jsonData;
              
            }
              
              
          },
          {
            path: ':eventId',
            element: <EventDetailPage />
          }
        ],
      }
      


    ]
    
  },

]);

export default router;