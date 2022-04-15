import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { updateBookDetails, AddABook } from '../Services';

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
          errors.title = '**Required';
        }
        if (!values.authorName) {
          errors.authorName = '**Required';
        }
        if (!values.totalCopies) {
          errors.totalCopies = '**Required';
        }
        if (!values.availableCopies) {
          errors.availableCopies = '**Required';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        if (title === 'EDIT BOOK') {
          let temp =
            state &&
            state.map((ele, i) => {
              if (ele.id === props.id) {
                updateBookDetails(values, ele.id);
                return {
                  title: values.title,
                  name: values.authorName,
                  copies: values.totalCopies,
                  availableCopies: values.availableCopies,
                  id: props.id,
                };
              } else {
                return ele;
              }
            });
          setState([...temp]);
        }
        if (title === 'ADD BOOK') {
          let temp = state && [...state];
          AddABook(values);
          temp.push({
            title: values.title,
            name: values.authorName,
            copies: values.totalCopies,
            availableCopies: values.availableCopies,
            id: `${+state[state.length - 1].id + 1}`,
          });

          setState([...temp]);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <table>
            <tr>
              <th className="table-header-item table-header">Book Title : </th>
              <td
                className="table-row-item"
                style={{ backgroundColor: 'rgba(79, 235, 183, 0.788' }}
              >
                <Field
                  type="text"
                  name="title"
                  style={{ height: '23px', borderRadius: '0.5rem' }}
                />
                <ErrorMessage name="title" component="div" />
              </td>
            </tr>

            <tr>
              <th className="table-header-item table-header">Author Name : </th>
              <td
                className="table-row-item"
                style={{ backgroundColor: 'rgba(79, 235, 183, 0.788' }}
              >
                <Field
                  type="text"
                  name="authorName"
                  style={{ height: '23px', borderRadius: '0.5rem' }}
                />
                <ErrorMessage name="authorName" component="div" />
              </td>
            </tr>

            <tr>
              <th className="table-header-item table-header">
                Total Copies :{' '}
              </th>
              <td
                className="table-row-item"
                style={{ backgroundColor: 'rgba(79, 235, 183, 0.788' }}
              >
                <Field
                  type="text"
                  name="totalCopies"
                  style={{ height: '23px', borderRadius: '0.5rem' }}
                />
                <ErrorMessage name="totalCopies" component="div" />
              </td>
            </tr>

            <tr>
              <th className="table-header-item table-header">
                Available Copies At Present:{' '}
              </th>
              <td
                className="table-row-item"
                style={{ backgroundColor: 'rgba(79, 235, 183, 0.788' }}
              >
                <Field
                  type="text"
                  name="availableCopies"
                  style={{ height: '23px', borderRadius: '0.5rem' }}
                />
                <ErrorMessage name="availableCopies" component="div" />
              </td>
            </tr>
            <br />
            <tr>
              <th>
                <button
                  type="submit"
                  style={{
                    width: '100px',
                    height: '50px',
                    color: 'black',
                    fontSize: '20px',
                  }}
                >
                  Submit
                </button>
              </th>
            </tr>
          </table>
        </Form>
      )}
    </Formik>
  </div>
);

export default FormComponent;
