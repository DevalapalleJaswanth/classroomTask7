import React, { useContext } from 'react';
import { libraryContext } from './Context';
import { FormComponent } from './Components';

export default function AddBook() {
  const { state, setState } = useContext(libraryContext);

  return (
    <>
      <FormComponent
        props={undefined}
        title={'ADD BOOK'}
        setState={setState}
        state={state}
      />
    </>
  );
}
