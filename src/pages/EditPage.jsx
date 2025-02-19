import { useLoaderData } from 'react-router-dom';
import EventForm from '../components/EventForm';
const EditPage = () => {
    const event = useLoaderData();
    

  return <EventForm method='PUT' event={event} />;
};
export default EditPage;