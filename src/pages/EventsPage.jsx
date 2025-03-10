import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import EventList from "../components/EventList";
import { EVENT_API_URL } from "../config/host-config";

const EventsPage = () => {

  const eventList = useLoaderData();

  // const [eventList, setEventList] = useState([]);

  // useEffect는 렌더링 이후에 실행됨
  // useEffect(() => { 

  //   const fetchEvents = async () => { 
  //     const response = await fetch(`http://localhost:9000/api/events`);
  //     const responseData = await response.json();

  //     setEventList(responseData);
  //   };

  //   fetchEvents();

  // }, []);

  


  return (
   <EventList eventList={eventList}/>
  );
};

export default EventsPage;

// loader를 아웃소싱
export const loader = async () =>{
  const res = await fetch(`${EVENT_API_URL}?sort=id`);
  // const jsonData = await res.json();
  
  //예외처리 
  if(!res.ok){
    const jsonData = await res.json();

    throw new Response(
      JSON.stringify(jsonData), // 에러메세지
      {
        status : res.status
      } // 에러정보 객체
    );
  }

  // loader가 리턴한 데이터는 라우팅된 페이지와 
  // 그 컴포넌트의 하위 컴포넌트에서 언제든 뽑아서 사용할 수 있음
  return res; // loader는 fetch 결과를 바로 리턴하는 경우 json 추출작업을 자동수행

};