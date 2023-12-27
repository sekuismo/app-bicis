import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUser } from "../Context";

function Login() {
  const { setUserType } = useUser();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Verificar si el usuario ya está logueado
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUserType(foundUser.data.profile); // Ajustar según cómo quieras manejar el tipo de usuario
      navigateToUserPage(foundUser.data.profile); // Asegúrate de que esta función maneje los tipos correctamente
    }
  }, [setUserType, navigate]);

  const navigateToUserPage = (userType) => {
    switch (userType) {
      case "Administrador":
        navigate("/homeAdmin");
        break;
      case "Estudiante":
        navigate("/homeUser");
        break;
      case "Guardia":
        navigate("/homeGuardia");
        break;
      default:
        navigate("/"); // Ruta por defecto si el tipo de usuario no coincide
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Debe ser un correo electrónico válido")
      .required("El correo electrónico es obligatorio"),
    password: Yup.string().required("La contraseña es obligatoria"),
  });

  const handleLogin = async (values, { setSubmitting }) => {
    const { email, password } = values;
    try {
      const response = await axios.post("http://107.22.28.154:3333/auth/login", {
        email,
        password
      });
      const userData = response.data;

      if (userData && userData.status === 0) {
        localStorage.setItem("user", JSON.stringify(userData));
        setUserType(userData.data.profile);
        navigateToUserPage(userData.data.profile);
        setErrorMessage("");
      } else {
        setErrorMessage(userData.message || "Error al iniciar sesión");
      }
    } catch (error) {
      console.error("Error al realizar la petición:", error);
      setErrorMessage("Error en la petición");
    }
    setSubmitting(false);
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 bg-light" style={{ minWidth: "350px" }}>
        <h3 className="text-center mb-4">Iniciar Sesión</h3>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Correo electrónico:
                </label>
                <Field
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Ingresa tu correo electrónico"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-danger"
                />
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
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-danger"
                />
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
  );
}

export default Login;
