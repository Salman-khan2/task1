import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./update.css"

const UpdateList = () => {
    const [employee_id,setEmployee_id] = useState('');
    const [name,setName] = useState('');
    const [position,setPosition] = useState('');
    const [salary,setSalary] = useState('');
    const params = useParams();
    const navigate = useNavigate();
  
    useEffect(() => {
        getEmployeDetails();
    }, []);
  
    const getEmployeDetails = async () => {
      console.log(params.id);
      let result = await fetch(`http://localhost:4000/employe/${params.id}`, {
      });
      result = await result.json();
      console.log(result)
      setEmployee_id(result.employee_id);
      setName(result.name);
      setPosition(result.position);
      setSalary(result.salary);
    };
  
    const handleUpdateEmployee = async () => {
      let result = await fetch(`http://localhost:4000/employee/${params.id}`, {
        method: "Put",
        body: JSON.stringify({ employee_id, name, position, salary }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      result = await result.json();
      console.log(result);
      navigate("/");
    };
  
    return (
      <div className="employee-box">
        <h1>Update Product</h1>
        <input
          type="text"
          placeholder="Enter  Employee Id"
          className="input-field"
          onChange={(event) => setEmployee_id(event.target.value)}
          value={employee_id}
        />
  
        <input
          type="text"
          placeholder="Enter Employee Name"
          className="input-field"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
  
        <input
          type="text"
          placeholder="Enter Employee Position"
          className="input-field"
          onChange={(event) => setPosition(event.target.value)}
          value={position}
        />
  
        <input
          type="text"
          placeholder="Enter  Employee Salary"
          className="input-field"
          onChange={(event) => setSalary(event.target.value)}
          value={salary} 
        />
  
        <button onClick={handleUpdateEmployee} className="update-button">
          Update Employee
        </button>
      </div>
    );
  };
  
  export default UpdateList;