import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useUser } from '../Context';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Login() {
  const { setUserType } = useUser();
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate()
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('El usuario es obligatorio'),
    password: Yup.string().required('La contraseña es obligatoria'),
  });

  const handleLogin = async (values, { setSubmitting }) => {
    const { username, password } = values;

    try {
      // Realizar la petición HTTP al servidor utilizando Axios
      const response = await axios.get('http://localhost:3000/users');
      const data = response.data;

      // Verificar si el usuario y contraseña son válidos en la respuesta del servidor
      const user = data.find((user) => user.username === username && user.password === password);

      if (user) {
        // Usuario válido, actualizar el tipo de usuario a 'estudiante'
        setUserType('estudiante');
        console.log('funcionó')
        navigate('/homeUser');
        setErrorMessage('');
      } else {
        // Usuario o contraseña inválidos, mostrar mensaje de error
        setErrorMessage('Usuario o contraseña inválidos');
      }
    } catch (error) {
      console.error('Error al realizar la petición:', error);
      setErrorMessage('Error en la petición');
    }

    setSubmitting(false);
  };

  return (
    <div>
      <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4 bg-light" style={{ minWidth: '350px' }}>
          <h3 className="text-center mb-4">Iniciar Sesión</h3>
          <Formik
            initialValues={{
              username: '',
              password: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Usuario:
                  </label>
                  <Field
                    type="text"
                    name="username"
                    className="form-control"
                    placeholder="Ingresa tu nombre de usuario"
                  />
                  <ErrorMessage name="username" component="div" className="text-danger" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Contraseña:
                  </label>
                  <Field
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Ingresa tu contraseña"
                  />
                  <ErrorMessage name="password" component="div" className="text-danger" />
                </div>
                <div className="mb-3 form-check">
                  <Field
                    type="checkbox"
                    className="form-check-input"
                    id="rememberMe"
                    name="rememberMe"
                  />
                  <label className="form-check-label" htmlFor="rememberMe">
                    Recordar sesión
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  disabled={isSubmitting}
                >
                  Iniciar Sesión
                </button>
              </Form>
            )}
          </Formik>
          <div className="text-danger text-center mb-3">{errorMessage}</div>
          <hr />
          <p className="text-center mb-0">
            ¿No tienes una cuenta? <a href="#">Regístrate</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
