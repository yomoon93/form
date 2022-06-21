import React, { useState } from "react";

import "../Style/style.css";
import Table from "./Table";

const Form = (props) => {
  // const[firstName, setFirst]=useState('')
  // const[lastName, setLast]=useState('')
  // const[number,setNumber]=useState('')
  // const[info,setInfo]=useState([])

  //so this is the data that gets set to the table (hooks)
  const [tableData, setTableData] = useState([]);
  //
  const [state, setState] = useState({
    fname: "",
    lname: "",
    number: "",
  });

  

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkEmpty = !Object.values(state).every((res) => res === "");
    if (checkEmpty) {
      const newData = (data) => [...data, state];
      setTableData(newData);
      const emptyInput = { fname: "", lname: "", number: "" };
      setState(emptyInput);
    }
  };
  //    const clearState =()=>{
  //     setState('')
  //    }

  console.log(state);
  return (
    <>
      <form action="set" className="form">
        <input
          className="form-control"
          type="text"
          placeholder="First"
          name="fname"
          value={state.fname}
          onChange={handleChange}
        />
        <input
          className="form-control"
          type="text"
          placeholder="Last"
          name="lname"
          value={state.lname}
          onChange={handleChange}
        />
        <input
          className="form-control"
          type="number"
          placeholder="Number"
          name="number"
          min="10"
          max="10"
          value={state.number}
          onChange={handleChange}
        />
        <button className="btn" onClick={handleSubmit}>
          Sumbit
        </button>
      </form>
      <Table tableData={tableData} />
    </>
  );
};
export default Form;
