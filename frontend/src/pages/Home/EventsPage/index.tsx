import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Events } from 'type/events';
import { SpringPage } from 'type/vendor/spring';
import { requestBackend } from 'util/requests';
import EventsCard from 'components/EventsCard';
import Pagination from 'components/Pagination';

function EventsPage() {
  const [page, setPage] = useState<SpringPage<Events>>();
  const getEvents = (pageNumber?: number) => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: `/events`,
      params: { page: pageNumber, size: 4 },
      withCredentials: false,
    };
    requestBackend(params).then((response) => {
      setPage(response.data);
    });
  };

  useEffect(() => {
    getEvents(0);
  }, []);
  return (
    <div className="events-container">
      <div className="row">
        {page?.content.map((events) => (
          <div className="col-sm-6 col-lg-3 col-xl-3" key={events.id}>
            <EventsCard events={events} onDelete={() => getEvents()} />
          </div>
        ))}
        <div className="row">
          <Pagination
            pageCount={page ? page.totalPages : 0}
            range={3}
            onChange={getEvents}
          />
        </div>
      </div>
    </div>
  );
}

export default EventsPage;
