import React, { useContext } from 'react';
import { libraryContext } from './Context';
import { useNavigate } from 'react-router-dom';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
export default function Books() {
  const { state, setState, setListClicked } = useContext(libraryContext);
  const navigate = useNavigate();
  return (
    <div>
      <table className="row-table">
        <thead className="table-header">
          <tr>
            <th className="table-header-item">ID </th>
            <th className="table-header-item">Book Name</th>
            <th className="table-header-item">Author</th>
            <th className="table-header-item">Total Copies</th>
            <th className="table-header-item">Present available copies </th>
            <th colSpan="3" className="table-header-item">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {state &&
            state.map((ele, i) => (
              <tr key={i} className="table-row">
                <td className="table-row-item">{ele.id}</td>
                <td className="table-row-item">{ele.title}</td>
                <td className="table-row-item">{ele.name}</td>
                <td className="table-row-item">{ele.copies}</td>
                <td className="table-row-item">{ele.availableCopies}</td>
                <td className="table-row-item">
                  <EditTwoToneIcon
                    onClick={() => {
                      setListClicked(false);
                      navigate(`/edit-book/${ele.id}`);
                    }}
                  />
                </td>
                <td className="table-row-item">
                  <DeleteForeverTwoToneIcon
                    onClick={() => {
                      navigate(`/delete-book/${ele.id}`);
                    }}
                  />
                </td>
                <td className="table-row-item">
                  <MoreHorizTwoToneIcon
                    onClick={() => {
                      setListClicked(false);
                      navigate(`/book/${ele.id}`);
                    }}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <table className="column-table">
        {state &&
          state.map((ele, i) => (
            <>
              <tr>
                <th className="table-header-item table-header">ID </th>
                <td
                  className="table-row-item"
                  style={{ backgroundColor: 'rgba(79, 235, 183, 0.788' }}
                >
                  {ele.id}
                </td>
              </tr>
              <tr>
                <th className="table-header-item table-header">Book Name</th>
                <td
                  className="table-row-item"
                  style={{ backgroundColor: 'rgba(79, 235, 183, 0.788' }}
                >
                  {ele.title}
                </td>
              </tr>
              <tr>
                <th className="table-header-item table-header">Author</th>
                <td
                  className="table-row-item"
                  style={{ backgroundColor: 'rgba(79, 235, 183, 0.788' }}
                >
                  {ele.name}
                </td>
              </tr>
              <tr>
                <th className="table-header-item table-header">Total Copies</th>
                <td
                  className="table-row-item"
                  style={{ backgroundColor: 'rgba(79, 235, 183, 0.788' }}
                >
                  {ele.copies}
                </td>
              </tr>
              <tr>
                <th className="table-header-item table-header">
                  Present available copies{' '}
                </th>
                <td
                  className="table-row-item"
                  style={{ backgroundColor: 'rgba(79, 235, 183, 0.788' }}
                >
                  {ele.availableCopies}
                </td>
              </tr>
              <tr>
                <th rowSpan="3" className="table-header-item table-header">
                  Actions
                </th>
                <td
                  className="table-row-item"
                  style={{ backgroundColor: 'rgba(79, 235, 183, 0.788' }}
                >
                  <EditTwoToneIcon
                    onClick={() => {
                      setListClicked(false);
                      navigate(`/edit-book/${ele.id}`);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td
                  className="table-row-item"
                  style={{ backgroundColor: 'rgba(79, 235, 183, 0.788' }}
                >
                  <DeleteForeverTwoToneIcon
                    onClick={() => {
                      navigate(`/delete-book/${ele.id}`);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td
                  className="table-row-item"
                  style={{ backgroundColor: 'rgba(79, 235, 183, 0.788' }}
                >
                  <MoreHorizTwoToneIcon
                    onClick={() => {
                      setListClicked(false);
                      navigate(`/book/${ele.id}`);
                    }}
                  />
                </td>
              </tr>
              <br />
            </>
          ))}
      </table>
    </div>
  );
}
