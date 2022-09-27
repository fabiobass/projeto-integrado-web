import { AxiosRequestConfig } from 'axios';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { News } from 'type/news';
import { requestBackend } from 'util/requests';
import { toast } from 'react-toastify';

import './styles.css';

type UrlParams = {
  newsId: string;
};

function NewsForm() {
  const { newsId } = useParams<UrlParams>();
  const isEditing = newsId !== 'create';
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<News>();

  useEffect(() => {
    if (isEditing) {
      requestBackend({ url: `/events/news/${newsId}` }).then((response) => {
        const news = response.data as News;
        setValue('name', news.name);
        setValue('url', news.url);
        setValue('description', news.description);
      });
    }
  }, [setValue, isEditing, newsId]);

  const onSubmit = (formData: News) => {
    const config: AxiosRequestConfig = {
      method: isEditing ? 'PUT' : 'POST',
      url: isEditing ? `events/news/${newsId}` : 'events/news',
      data: formData,
      withCredentials: true,
    };
    requestBackend(config)
      .then((response) => {
        toast.info('Cadastrado com sucesso');
        history.push('/');
      })
      .catch((error) => {
        toast.error('Erro ao cadastrar notícia');
      });
  };

  const handleCancel = () => {
    history.push('/');
  };

  return (
    <div className="form-news-container ">
      <div className="animate__animated animate__fadeInLeft">
        <div className="form-news-card-container">
          <h1>Cadastre notícias</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="margin-bottom-30 input-form">
              <input
                {...register('name', {
                  required: 'Campo obrigatório',
                })}
                type="text"
                className={`form-control  ${errors.name ? 'is-invalid' : ''} `}
                placeholder="Título"
                name="name"
                data-testid="name"
              />
              <div className="invalid-feedback d-block">
                {errors.name?.message}
              </div>
            </div>
            <div className="margin-bottom-30 input-form">
              <input
                {...register('url', {
                  required: 'Campo obrigatório',
                  pattern: {
                    value: /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/gm,
                    message: 'Deve ser uma URL válida',
                  },
                })}
                type="text"
                className={`form-control${errors.name ? 'is-invalid' : ''} `}
                placeholder="URL"
                name="url"
                data-testid="imgUrl"
              />
              <div className="invalid-feedback d-block">
                {errors.url?.message}
              </div>
            </div>
            <div className="col-lg-6 textarea">
              <div>
                <textarea
                  rows={10}
                  {...register('description', {
                    required: 'Campo obrigatório',
                  })}
                  className={`form-control  h-auto ${
                    errors.name ? 'is-invalid' : ''
                  } `}
                  placeholder="Descrição"
                  name="description"
                  data-testid="description"
                />
                <div className="invalid-feedback d-block">
                  {errors.description?.message}
                </div>
              </div>
            </div>
            <div className="button-form-news">
              <button className="btn btn-danger btn-pad-form">SALVAR</button>
              <button
                className="btn btn-danger btn-pad-form"
                onClick={handleCancel}
              >
                VOLTAR
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewsForm;
