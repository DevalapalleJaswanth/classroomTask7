import React, { useContext, useEffect } from 'react';
import { libraryContext } from './Context';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteBook } from './Services';
export default function EditPage() {
  const navigate = useNavigate();
  const { state, setState } = useContext(libraryContext);
  let { id } = useParams();
  const DeleteBook = (id) => {
    let obj =
      state &&
      state.filter((ele, i) => {
        if (ele.id !== id) {
          return ele;
        }
      });
    setState([...obj]);
    navigate(-1);
  };
  useEffect(() => {
    if (state && id) {
      DeleteBook(id);
      deleteBook(id);
    }
  }, [id]);
}
