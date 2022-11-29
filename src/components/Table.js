import React, { useContext, useEffect, useState } from "react";
import "./Table.css";
import { UserContext } from "../App";

function Table() {
  const { eventData } = useContext(UserContext);

  const renderTableHeader = () =>     
    <>
      <th>Name</th>
      <th>Meals</th>
    </>  

  const renderTableData = () =>
    eventData.users.map((user, index) =>      
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.stuff.join(', ')}</td>                            
            </tr>        
      );    
  

  return (
    <div className="table-container">
      <h1 id='title'>Summary</h1>
      <table id='users'>
        <tbody>
          <tr>{renderTableHeader()}</tr>        
          {renderTableData()}
          </tbody>
      </table>
    </div>
  );
}

export default Table;
