import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function RegisterGuardia() {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Dirección de correo electrónico inválida').required('Este campo es obligatorio'),
    fullName: Yup.string().required('Este campo es obligatorio'),
    password: Yup.string().required('Este campo es obligatorio'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
      .required('Este campo es obligatorio'),
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
      //ACÁ TENEMOS QUE HACER LA PETICIÓN POST AL BACK END PARA QUE FUNCIONE
      console.log('Formulario de guardia', values);
    },
  });

  return (
    <div>
      <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100">
        <div className="card p-4 bg-light w-100" style={{ maxWidth: '400px' }}>
          <h3 className="text-center mb-4">Crear cuenta de guardia</h3>
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
              {formik.touched.email && formik.errors.email && (
                <div className="invalid-feedback">{formik.errors.email}</div>
              )}
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
              {formik.touched.fullName && formik.errors.fullName && (
                <div className="invalid-feedback">{formik.errors.fullName}</div>
              )}
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
                  formik.touched.confirmPassword && formik.errors.confirmPassword ? 'is-invalid' : ''
                }`}
                id="confirmPassword"
                placeholder="Confirma tu contraseña"
                {...formik.getFieldProps('confirmPassword')}
              />
              {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                <div className="invalid-feedback">{formik.errors.confirmPassword}</div>
              )}
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Crear cuenta
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterGuardia;
