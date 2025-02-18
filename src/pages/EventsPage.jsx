import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import EventList from "../components/EventList";

const EventsPage = () => {

  const eventList = useLoaderData();

  // const [eventList, setEventList] = useState([]);

  // useEffect는 렌더링 이후에 실행됨됨
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