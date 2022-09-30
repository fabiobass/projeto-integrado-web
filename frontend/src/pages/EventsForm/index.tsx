import { AxiosRequestConfig } from 'axios';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { Events } from 'type/events';
import { requestBackend } from 'util/requests';
import { toast } from 'react-toastify';

import './styles.css';

type UrlParams = {
  eventId: string;
};

function EventsForm() {
  const { eventId } = useParams<UrlParams>();
  const isEditing = eventId !== 'create';
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Events>();

  useEffect(() => {
    if (isEditing) {
      requestBackend({ url: `/events/${eventId}` }).then((response) => {
        const events = response.data as Events;
        setValue('name', events.name);
        setValue('date', events.date);
        setValue('imgUrl', events.imgUrl);
      });
    }
  }, [isEditing, eventId, setValue]);

  const onSubmit = (formData: Events) => {
    const config: AxiosRequestConfig = {
      method: isEditing ? 'PUT' : 'POST',
      url: isEditing ? `/events/${eventId}` : '/events',
      data: formData,
      withCredentials: true,
    };
    requestBackend(config)
      .then((response) => {
        toast.info('Cadastrado com sucesso');
        history.push('/');
      })
      .catch((error) => {
        toast.error('Erro ao cadastrar evento');
      });
  };
  const handleCancel = () => {
    history.push('/');
  };

  return (
    <div className="form-container">
      <div className="animate__animated animate__fadeInLeft">
        <div className="form-card-container">
          <h1>Eventos</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="margin-bottom-30 input-form">
              <input
                {...register('name', {
                  required: 'Campo obrigatório',
                })}
                type="text"
                className={`form-control ${errors.name ? 'is-invalid' : ''} `}
                placeholder="Nome do evento"
                name="name"
                data-testid="name"
              />
              <div className="invalid-feedback d-block">
                {errors.name?.message}
              </div>
            </div>

            <div className="margin-bottom-30 input-form">
              <input
                {...register('date', {
                  required: 'Campo obrigatório',
                })}
                type="date"
                className={`form-control${errors.name ? 'is-invalid' : ''} `}
                name="date"
                data-testid="date"
              />
              <div className="invalid-feedback d-block">
                {errors.name?.message}
              </div>
            </div>
            <div className="margin-bottom-30 input-form">
              <input
                {...register('imgUrl', {
                  required: 'Campo obrigatório',
                  pattern: {
                    value: /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/gm,
                    message: 'Deve ser uma URL válida',
                  },
                })}
                type="text"
                className={`form-control  ${errors.name ? 'is-invalid' : ''} `}
                placeholder="URL da imagem"
                name="imgUrl"
                data-testid="imgUrl"
              />
              <div className="invalid-feedback d-block">
                {errors.imgUrl?.message}
              </div>
            </div>
            <div className="button-form">
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

export default EventsForm;
