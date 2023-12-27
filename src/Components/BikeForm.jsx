import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const BikeFormSchema = Yup.object().shape({
  brandName: Yup.string().required('La marca es obligatoria'),
  model: Yup.string().required('El modelo es obligatorio'),
  color: Yup.string().required('El color es obligatorio'),
  accesories: Yup.string(),
});

function BikeForm({ bikeData, submitBikeForm }) {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 bg-light" style={{ minWidth: '350px' }}>
        <h3 className="text-center mb-4">Registrar Bicicleta</h3>
        <Formik
          initialValues={bikeData}
          validationSchema={BikeFormSchema}
          onSubmit={(values, actions) => {
            submitBikeForm(values);
            actions.setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-3">
                <label htmlFor="brandName" className="form-label">Marca:</label>
                <Field name="brandName" type="text" className="form-control" />
                <ErrorMessage name="brandName" component="div" className="text-danger" />
              </div>

              <div className="mb-3">
                <label htmlFor="model" className="form-label">Modelo:</label>
                <Field name="model" type="text" className="form-control" />
                <ErrorMessage name="model" component="div" className="text-danger" />
              </div>

              <div className="mb-3">
                <label htmlFor="color" className="form-label">Color:</label>
                <Field name="color" type="text" className="form-control" />
                <ErrorMessage name="color" component="div" className="text-danger" />
              </div>

              <div className="mb-3">
                <label htmlFor="accesories" className="form-label">Accesorios:</label>
                <Field name="accesories" as="textarea" className="form-control" />
                <ErrorMessage name="accesories" component="div" className="text-danger" />
              </div>

              <button type="submit" className="btn btn-primary btn-block" disabled={isSubmitting}>
                Guardar Bicicleta
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default BikeForm;
