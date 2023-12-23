// BikeForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const BikeFormSchema = Yup.object().shape({
  brand_name: Yup.string().required('La marca es obligatoria'),
  model: Yup.string().required('El modelo es obligatorio'),
  color: Yup.string().required('El color es obligatorio'),
  accessories: Yup.string(),
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
                <label htmlFor="brand_name" className="form-label">Marca:</label>
                <Field name="brand_name" type="text" className="form-control" />
                <ErrorMessage name="brand_name" component="div" className="text-danger" />
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
                <label htmlFor="accessories" className="form-label">Accesorios:</label>
                <Field name="accessories" as="textarea" className="form-control" />
                <ErrorMessage name="accessories" component="div" className="text-danger" />
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
