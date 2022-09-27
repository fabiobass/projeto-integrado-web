import { AuthContext } from 'AuthContext';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import { getTokendata } from 'util/auth';
import { requestBackendLogin } from 'util/requests';
import { saveAuthdata } from 'util/storage';
import logoCesmac from '../../assets/images/cesmac.png';

import './styles.css';

type FormData = {
  username: string;
  password: string;
};

type LocationState = {
  from: string;
};

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [hasError, setHasError] = useState(false);
  const history = useHistory();
  const location = useLocation<LocationState>();
  const { from } = location.state || { from: { pathname: '/' } };
  const { setAuthContextData } = useContext(AuthContext);

  const onSubmit = (formData: FormData) => {
    requestBackendLogin(formData)
      .then((response) => {
        saveAuthdata(response.data);
        setHasError(false);
        setAuthContextData({
          authenticated: true,
          tokenData: getTokendata(),
        });
        history.replace(from);
      })
      .catch((error) => {
        setHasError(true);
        console.log('erro', error);
      });
  };
  const backHome = () => {
    history.push('/');
  };

  return (
    <div className="login-container animate__animated animate__fadeInLeft">
      <div className="nav-logo ">
        <img src={logoCesmac} alt="logo" />
      </div>
      <div className="login-card-container">
        {hasError && (
          <div className="alert alert-danger">Usuário não autorizado</div>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4 input">
            <input
              {...register('username', {
                required: 'Campo obrigatório',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Email inválido',
                },
              })}
              type="text"
              className={`base-input ${errors.username ? 'is-invalid' : ''} `}
              placeholder="Email"
              name="username"
            />
            <div className="invalid-feedback d-block">
              {errors.username?.message}
            </div>
          </div>
          <div className="mb-2 input">
            <input
              {...register('password', {
                required: 'Campo obrigatório',
              })}
              type="password"
              className={`base-input ${errors.password ? 'is-invalid' : ''}`}
              placeholder="Senha"
              name="password"
            />
            <div className="invalid-feedback d-block">
              {errors.password?.message}
            </div>
          </div>
          <div className="button">
            <button className="btn btn-danger btn-login">ENTRE</button>
            <button className="btn btn-danger btn-login" onClick={backHome}>
              VOLTAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
