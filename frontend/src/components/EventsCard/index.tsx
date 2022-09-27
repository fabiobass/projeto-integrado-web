import { useContext } from 'react';
import { AuthContext } from 'AuthContext';
import { AxiosRequestConfig } from 'axios';
import { Link } from 'react-router-dom';
import { Events } from 'type/events';
import { formatDate } from 'util/format';
import { requestBackend } from 'util/requests';
import { toast } from 'react-toastify';
import deleteImg from '../../assets/images/delete.svg';
import editImg from '../../assets/images/edit.svg';

import './styles.css';

type Props = {
  events: Events;
  onDelete: Function;
};

function EventsCard({ events, onDelete }: Props) {
  const { authContextData } = useContext(AuthContext);

  const handleDelete = (eventId: number) => {
    if (!window.confirm('tem certeza que deseja excluir?')) {
      return;
    }

    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: `/events/${eventId}`,
      withCredentials: true,
    };
    requestBackend(config).then(() => {
      onDelete();
      toast.success('Excluído com sucesso');
    });
  };

  return (
    <div className="card-container animate__animated animate__fadeInLeft">
      {authContextData.authenticated && (
        <div>
          <div className="img-delete" onClick={() => handleDelete(events.id)}>
            <img src={deleteImg} alt="excluir" />
          </div>
          <Link to={`/events/${events.id}`}>
            <div className="img-edit">
              <img src={editImg} alt="editar" />
            </div>
          </Link>
        </div>
      )}

      <div className="card-image">
        <img src={events.imgUrl} alt={events.name} />
      </div>
      <div className="card-title">
        <h1>{events.name}</h1>
      </div>
      <div className="card-date">
        <label htmlFor="date">Data:</label>
        <p>{formatDate(events.date)}</p>
      </div>
    </div>
  );
}

export default EventsCard;
