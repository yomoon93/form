import React from "react";
import "../Style/style.css";
;

const Table = ({ tableData }) => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
          </tr>
        </thead>
<tbody>
    {tableData.map((data,index)=>{ 
        console.log(typeof tableData)
        return(
            <tr key={index}>
                <td>{index+1}</td>
                <td>{data.fname.sort((a,b)=>a-b)}</td>
                <td>{data.lname}</td>
                <td>{data.number}</td>


            </tr>
        )

    })}
     
</tbody>
      
      </table>
    </>
  );
};
export default Table;
