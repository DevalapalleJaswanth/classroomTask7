import React, { useContext } from 'react';
import { libraryContext } from './Context';
import { FormComponent } from './Components';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditPage() {
  const navigate = useNavigate();
  const { state, setState } = useContext(libraryContext);
  let { id } = useParams();
  const getData = (id) => {
    let obj =
      state &&
      state.filter((ele, i) => {
        if (ele.id === id) {
          return ele;
        }
      });
    return obj[0];
  };
  return (
    <>
      <FormComponent
        props={getData(id)}
        title={'EDIT PAGE'}
        setState={setState}
        state={state}
      />
    </>
  );
}
