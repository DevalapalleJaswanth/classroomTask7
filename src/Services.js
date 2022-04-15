import axios from 'axios';

export function updateBookDetails(values, id) {
  try {
    axios.post(`https://6215fab47428a1d2a3567953.mockapi.io/library/${id}`, {
      title: values.title,
      name: values.authorName,
      copies: values.totalCopies,
      availableCopies: values.availableCopies,
    });
  } catch (error) {
    console.log(error);
  }
}

export function AddABook(values) {
  try {
    axios.post(`https://6215fab47428a1d2a3567953.mockapi.io/library/`, {
      title: values.title,
      name: values.authorName,
      copies: values.totalCopies,
      availableCopies: values.availableCopies,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function deleteBook(id) {
  try {
    axios.delete(`https://6215fab47428a1d2a3567953.mockapi.io/library/${id}`);
  } catch (error) {
    console.log(error);
  }
}

export async function getBooks() {
  try {
    let resp = await axios.get(
      `https://6215fab47428a1d2a3567953.mockapi.io/library/`
    );
    return resp.data;
  } catch (error) {
    console.log(error);
  }
}
