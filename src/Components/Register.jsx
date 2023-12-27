import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  function validarRUT(rut) {
    // Eliminar puntos y guión
    let valor = rut.replace(/\./g, "").replace("-", "");

    // Aislar cuerpo y dígito verificador
    let cuerpo = valor.slice(0, -1);
    let dv = valor.slice(-1).toUpperCase();

    // Calcular dígito esperado
    let suma = 0;
    let multiplo = 2;

    for (let i = 1; i <= cuerpo.length; i++) {
      let index = multiplo * valor.charAt(cuerpo.length - i);
      suma = suma + index;
      if (multiplo < 7) {
        multiplo = multiplo + 1;
      } else {
        multiplo = 2;
      }
    }

    let dvEsperado = 11 - (suma % 11);
    dv = dv === "K" ? 10 : dv;
    dv = parseInt(dv) === 0 ? 11 : dv;

    return dvEsperado === parseInt(dv);
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Ingresa un correo electrónico válido")
      .matches(
        /^[a-zA-Z0-9._-]+@inacapmail\.cl$/,
        "Solo se permite registrar con correo Inacap"
      )
      .required("Campo requerido"),
    name: Yup.string().required("Campo requerido"),
    lastName: Yup.string().required("Campo requerido"),
    rut: Yup.string()
      .required("Campo requerido")
      .test("es-valido", "RUT no válido", validarRUT),
    birthDate: Yup.string().required("Campo requerido"),
    phone: Yup.string().required("Campo requerido"),
    password: Yup.string()
      .required("Campo requerido")
      .min(8, "La contraseña debe tener al menos 8 caracteres")
      .max(16, "La contraseña no puede tener más de 16 caracteres")
      .matches(
        /^(?=.*[A-Z])(?=.*\d)/,
        "La contraseña debe contener al menos una letra mayúscula y un número"
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Las contraseñas deben coincidir")
      .required("Campo requerido"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      lastName: "",
      rut: "",
      birthDate: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const userData = {
          name: values.name,
          lastName: values.lastName,
          rut: values.rut,
          birthDate: values.birthDate,
          email: values.email,
          phone: values.phone,
          passwrd: values.password,
          profileId: 3,
          status: true,
        };

        await axios.post("http://107.22.28.154:3333/person-user/", userData);
        console.log("Usuario estudiante registrado con éxito");
        navigate("/login");
      } catch (error) {
        console.error("Error al registrar el usuario:", error);
      }
    },
  });

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 bg-light w-100" style={{ maxWidth: "400px" }}>
        <h3 className="text-center mb-4">Registro</h3>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className={`form-control ${
                formik.touched.email && formik.errors.email ? "is-invalid" : ""
              }`}
              id="email"
              placeholder="Ingresa tu dirección de correo electrónico"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="invalid-feedback">{formik.errors.email}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nombre:
            </label>
            <input
              type="text"
              className={`form-control ${
                formik.touched.name && formik.errors.name ? "is-invalid" : ""
              }`}
              id="name"
              placeholder="Ingresa tu nombre"
              {...formik.getFieldProps("name")}
            />
            {formik.touched.name && formik.errors.name && (
              <div className="invalid-feedback">{formik.errors.name}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Apellido:
            </label>
            <input
              type="text"
              className={`form-control ${
                formik.touched.lastName && formik.errors.lastName
                  ? "is-invalid"
                  : ""
              }`}
              id="lastName"
              placeholder="Ingresa tu apellido"
              {...formik.getFieldProps("lastName")}
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <div className="invalid-feedback">{formik.errors.lastName}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="rut" className="form-label">
              RUT:
            </label>
            <input
              type="text"
              className={`form-control ${
                formik.touched.rut && formik.errors.rut ? "is-invalid" : ""
              }`}
              id="rut"
              placeholder="Ingresa tu RUT"
              {...formik.getFieldProps("rut")}
            />
            {formik.touched.rut && formik.errors.rut && (
              <div className="invalid-feedback">{formik.errors.rut}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="birthDate" className="form-label">
              Fecha de nacimiento:
            </label>
            <input
              type="text"
              className={`form-control ${
                formik.touched.birthDate && formik.errors.birthDate
                  ? "is-invalid"
                  : ""
              }`}
              id="birthDate"
              placeholder="DD/MM/AAAA"
              {...formik.getFieldProps("birthDate")}
            />
            {formik.touched.birthDate && formik.errors.birthDate && (
              <div className="invalid-feedback">{formik.errors.birthDate}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Teléfono:
            </label>
            <input
              type="text"
              className={`form-control ${
                formik.touched.phone && formik.errors.phone ? "is-invalid" : ""
              }`}
              id="phone"
              placeholder="Ingresa tu número de teléfono"
              {...formik.getFieldProps("phone")}
            />
            {formik.touched.phone && formik.errors.phone && (
              <div className="invalid-feedback">{formik.errors.phone}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Contraseña:
            </label>
            <input
              type="password"
              className={`form-control ${
                formik.touched.password && formik.errors.password
                  ? "is-invalid"
                  : ""
              }`}
              id="password"
              placeholder="Ingresa tu contraseña"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="invalid-feedback">{formik.errors.password}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirmar contraseña:
            </label>
            <input
              type="password"
              className={`form-control ${
                formik.touched.confirmPassword && formik.errors.confirmPassword
                  ? "is-invalid"
                  : ""
              }`}
              id="confirmPassword"
              placeholder="Confirma tu contraseña"
              {...formik.getFieldProps("confirmPassword")}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <div className="invalid-feedback">
                {formik.errors.confirmPassword}
              </div>
            )}
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
