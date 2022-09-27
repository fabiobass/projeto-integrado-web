import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { SpringPage } from 'type/vendor/spring';
import { requestBackend } from 'util/requests';
import { News } from 'type/news';
import NewsCard from 'components/NewsCard';
import Pagination from 'components/Pagination';

import './styles.css';

function NewsPage() {
  const [page, setPage] = useState<SpringPage<News>>();

  const getNews = (pageNumber?: number) => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: `/events/news`,
      params: { page: pageNumber, size: 4 },
      withCredentials: false,
    };
    requestBackend(params).then((response) => {
      setPage(response.data);
    });
  };

  useEffect(() => {
    getNews(0);
  }, []);

  return (
    <div className="new-container">
      <div className="row">
        {page?.content.map((news) => (
          <div className="col-sm-6 col-lg-3 col-xl-3" key={news.id}>
            <NewsCard news={news} onDelete={() => getNews()} />
          </div>
        ))}
        <div className="row">
          <Pagination
            pageCount={page ? page.totalPages : 0}
            range={3}
            onChange={getNews}
          />
        </div>
      </div>
    </div>
  );
}

export default NewsPage;
