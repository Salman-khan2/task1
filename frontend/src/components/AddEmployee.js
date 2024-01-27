import React,{useState} from "react";
import {useNavigate} from 'react-router-dom'

import "./Add.css"

const AddEmployee = ()=>{
    const [employee_id,setEmployee_id] = useState('');
    const [name,setName] = useState('');
    const [position,setPosition] = useState('');
    const [salary,setSalary] = useState('');
   const navigate = useNavigate();
    
    
    const handleAddProduct = async ()=>{
        
        
        let result = await fetch('http://localhost:4000/create',
        {
            method:"post",
            body:JSON.stringify({employee_id,name,position,salary}),
            headers: {
                "Content-Type": 'application/json',
            }
        })
        result = await result.json();
        if(result){
            setEmployee_id('')
            setName('');
            setPosition('');
            setSalary('');
        }
        navigate('/employee');
    }

    return (
        <div className="employee-box">
            
           <h1>Add Employee</h1>
           <input type='text' placeholder="Enter Employee Id" className="input-field"
           onChange={(event)=>setEmployee_id(event.target.value)}
           value={employee_id}
           />
          
           <input type='text' placeholder="Enter Employee Name" className="input-field"
            onChange={(event)=>setName(event.target.value)}
            value={name}
            />
            
           <input type='text' placeholder="Enter Employee Position" className="input-field"
            onChange={(event)=>setPosition(event.target.value)}
            value={position}
           />
           
           <input type='text' placeholder="Enter  Employee Salary" className="input-field"
            onChange={(event)=>setSalary(event.target.value)}
            value={salary}
           />
           
           <button onClick={handleAddProduct} className="add-button">Add Employee</button>
        </div>
        
    )
}
export default AddEmployee;