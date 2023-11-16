import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Register() {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Ingresa un correo electrónico válido').required('Campo requerido'),
    fullName: Yup.string().required('Campo requerido'),
    password: Yup.string()
      .required('Campo requerido')
      .min(8, 'La contraseña debe tener al menos 8 caracteres')
      .max(16, 'La contraseña no puede tener más de 16 caracteres')
      .matches(
        /^(?=.*[A-Z])(?=.*\d)/,
        'La contraseña debe contener al menos una letra mayúscula y un número'
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
      .required('Campo requerido'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      fullName: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: (values) => {
      // AQUÍ DEBERÍAS HACER LA PETICIÓN POST AL BACKEND PARA REGISTRAR AL USUARIO
      console.log(values);
    },
  });

  return (
    <div>
      <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100">
        <div className="card p-4 bg-light w-100" style={{ maxWidth: '400px' }}>
          <h3 className="text-center mb-4">Registro</h3>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
                id="email"
                placeholder="Ingresa tu dirección de correo electrónico"
                {...formik.getFieldProps('email')}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="invalid-feedback">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">
                Nombre completo:
              </label>
              <input
                type="text"
                className={`form-control ${formik.touched.fullName && formik.errors.fullName ? 'is-invalid' : ''}`}
                id="fullName"
                placeholder="Ingresa tu nombre completo"
                {...formik.getFieldProps('fullName')}
              />
              {formik.touched.fullName && formik.errors.fullName ? (
                <div className="invalid-feedback">{formik.errors.fullName}</div>
              ) : null}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Contraseña:
              </label>
              <input
                type="password"
                className={`form-control ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}`}
                id="password"
                placeholder="Ingresa tu contraseña"
                {...formik.getFieldProps('password')}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="invalid-feedback">{formik.errors.password}</div>
              ) : null}
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirmar contraseña:
              </label>
              <input
                type="password"
                className={`form-control ${
                  formik.touched.confirmPassword && formik.errors.confirmPassword ? 'is-invalid' : ''
                }`}
                id="confirmPassword"
                placeholder="Confirma tu contraseña"
                {...formik.getFieldProps('confirmPassword')}
              />
              {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                <div className="invalid-feedback">{formik.errors.confirmPassword}</div>
              ) : null}
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Registrarse
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
