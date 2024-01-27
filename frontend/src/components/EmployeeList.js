import React,{useEffect, useState} from "react";
import {Link} from 'react-router-dom'
import './Employee.css';

const EmployeeList = ()=>{
    
    const [data,setData] = useState([]);

    useEffect(()=>{
        getdata();
    },[]);



    const getdata = async()=>{

        let employee_data = await fetch("http://localhost:4000/employee");
        employee_data = await employee_data.json();
        setData(employee_data);
    }
    const deleteProduct = async(id)=>{
        let result = await fetch(`http://localhost:4000/employee/${id}`,
        {
            method:"Delete",
        })
        result = await result.json();
        if(result){
            getdata();
        }
       }


    const searchItem = async(event)=>{
        const key = event.target.value;
        if (key){
        console.log(key)
        let result = await fetch(`http://localhost:4000/search/${key}`,{
               
        })
        result = await result.json();
        setData(result)
        }else{
            getdata();
        }
    }
    return(

        <div className="employee-list">
            <h1>
                Employee List
            </h1>
            <input type="text" className="search-item" placeholder="Search Item"
            onChange={searchItem}
            />
            <ul>
                <li>Employee_id</li>
                <li>Name</li>
                <li>Position</li>
                <li>Salary</li>
                <li>Update/Delete</li>
            </ul>
           {
            data.length>0 ? data.map((item,index)=>
            <ul key={item._id}>
                <li>{index+1}</li>
                <li>{item.name}</li>
                <li>{item.position}</li>
                <li>{item.salary}</li>
                <li><button className="delete-btn" onClick={()=>deleteProduct(item._id)}>Delete</button><Link to={"/update/"+item._id} >Update List</Link></li>
            </ul>
            ):<h1>No Result Found</h1>
           }
        </div>

    )
}


export default EmployeeList ;