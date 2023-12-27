import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useUser } from "../Context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const { setUserType } = useUser();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Verificar si el usuario ya está logueado
    const loggedInUser = localStorage.getItem("user");

    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUserType(foundUser.type); //setea el tipo de usuario
      navigateToUserPage(foundUser.type); //navega al Navbar según el tipo de usuario
    }
  }, [setUserType, navigate]);

  const navigateToUserPage = (userType) => {
    if (userType === "estudiante") {
      navigate("/homeUser");
    } else if (userType === "administrador") {
      navigate("/homeAdmin");
    } else if (userType === "guardia") {
      navigate("/homeGuardia");
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
      const response = await axios.get("http://localhost:3000/users");
      const data = response.data;

      const user = data.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        // Almacena toda la información del usuario
        localStorage.setItem("user", JSON.stringify(user));
        setUserType(user.type);
        navigateToUserPage(user.type);
        setErrorMessage("");
      } else {
        setErrorMessage("Correo electrónico o contraseña inválidos");
      }
    } catch (error) {
      console.error("Error al realizar la petición:", error);
      setErrorMessage("Error en la petición");
    }

    setSubmitting(false);
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 bg-light">
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
