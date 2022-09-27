import { AuthContext } from 'AuthContext';
import { AxiosRequestConfig } from 'axios';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { News } from 'type/news';
import { requestBackend } from 'util/requests';
import { toast } from 'react-toastify';
import deleteImg from '../../assets/images/delete.svg';
import editImg from '../../assets/images/edit.svg';

import './styles.css';

type Props = {
  news: News;
  onDelete: Function;
};

function NewsCard({ news, onDelete }: Props) {
  const { authContextData } = useContext(AuthContext);

  const handleDelete = (newsId: number) => {
    if (!window.confirm('tem certeza que deseja excluir?')) {
      return;
    }
    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: `/events/news/${newsId}`,
      withCredentials: true,
    };
    requestBackend(config).then((res) => {
      onDelete();
      toast.success('Excluído com sucesso');
    });
  };

  return (
    <div className="news-container animate__animated animate__fadeInLeft">
      {authContextData.authenticated && (
        <div>
          <div className="img-delete" onClick={() => handleDelete(news.id)}>
            <img src={deleteImg} alt="excluir" />
          </div>
          <Link to={`/events/news/${news.id}`}>
            <div className="img-edit">
              <img src={editImg} alt="editar" />
            </div>
          </Link>
        </div>
      )}
      <div className="card-title">
        <h1>{news.name}</h1>
      </div>
      <div className="card-description">
        <a href={news.url}>
          <p>{news.description}</p>
        </a>
      </div>
    </div>
  );
}

export default NewsCard;
