import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import image from '../../assets/img/event/image.svg'
import location from '../../assets/img/event/location.svg'
import CardEvent1 from './CardEvent1'

import Pagination from './Pagination'




const Content = () => {
    const [events, setEvents] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [eventsPerPage, setEventsPerPage] = useState(3);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
      let isMounted = true;

      const fetchData = () => {
        axios
          .get("https://kbmdsi.galoostore.com/api/events")
          .then((response) => {
            if (isMounted) {
              const event = response.data.data;
              setEvents(event);
              setIsLoading(false);
              console.log(this.props.match.params._id);
            }
          })
          .catch((error) => {
            console.error(error);
            setIsLoading(false);
          });
      };

      const timeoutId = setTimeout(() => {
        fetchData();
      }, 1000); // Timeout set to 5 seconds

      return () => {
        isMounted = false;
        clearTimeout(timeoutId);
      };
    }, []);

    const lastEventIndex = currentPage * eventsPerPage;
    const firstEventIndex = lastEventIndex - eventsPerPage;
    const currentEvents = events.slice(firstEventIndex, lastEventIndex);

    return (
      <div>
        <div className="flex lg:flex-row flex-col justify-center gap-10 mt-56 px-4 lg:px-0">
          {isLoading ? (
            <p className="text-center">Loading...</p>
          ) : events.length === 0 ? (
            <p className="text-center">Belum ada acara saat ini</p>
          ) : (
            <CardEvent1 events={currentEvents} />
          )}
        </div>
        <Pagination
          totalEvents={events.length}
          eventsPerPage={eventsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    );
  };


export default Content
