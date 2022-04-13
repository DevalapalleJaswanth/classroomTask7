import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const FormComponent = ({ props, title, setState, state }) => (
  <div>
    <h2>{title && title}</h2>
    <Formik
      initialValues={{
        title: (props && props.title) || '',
        authorName: (props && props.name) || '',
        totalCopies: (props && props.copies) || '',
        availableCopies: (props && props.availableCopies) || '',
      }}
      validate={(values) => {
        const errors = {};
        if (!values.title) {
          errors.title = 'Required';
        }
        if (!values.authorName) {
          errors.authorName = 'Required';
        }
        if (!values.totalCopies) {
          errors.totalCopies = 'Required';
        }
        if (!values.availableCopies) {
          errors.availableCopies = 'Required';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        let temp =
          state &&
          state.map((ele, i) => {
            if (ele.id === props.id) {
              return {
                title: values.title,
                name: values.authorName,
                copies: values,
                totalCopies,
                availableCopies: values.availableCopies,
                id: props.id,
              };
            } else {
              return ele;
            }
          });
        setState([...temp]);
        console.log(temp);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <div>Book Title : </div>
            <div>
              <Field type="text" name="title" />
              <ErrorMessage name="title" component="div" />
            </div>
          </div>

          <div>
            <div>Author Name : </div>
            <div>
              <Field type="text" name="authorName" />
              <ErrorMessage name="authorName" component="div" />
            </div>
          </div>
          <div>
            <div>Total Copies : </div>
            <div>
              <Field type="text" name="totalCopies" />
              <ErrorMessage name="totalCopies" component="div" />
            </div>
          </div>
          <div>
            <div>Available Copies At Present: </div>
            <div>
              <Field type="text" name="availableCopies" />
              <ErrorMessage name="availableCopies" component="div" />
            </div>
          </div>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default FormComponent;
