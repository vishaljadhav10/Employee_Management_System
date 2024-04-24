import { FormEvent, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { createEmployeee, getEmployeeById, updateEmployeeId } from "../Services/EmployeeService";
import { getAllDepartments } from "../Services/DepartmentServices";
import { Button } from "react-bootstrap";

type RouteParam=
{
    id:string;
}

type department={
    id:number;
    departmentName:string;
    departmentDescription:string;
  }


const Employee:React.FC=()=>{

    const [firstName,setFirstName] =useState("");
    const [lastName,setLastName] =useState("");
    const [email,setEmail] =useState("");
    const  [depId,setDepartmentID] =useState("");
    const [departments,setDepartments]=useState<department[]>([]);

    const {id}=useParams<RouteParam>();
    
    const navigator=useHistory();

    const [errors,setErrors] =useState({
        firstName:'',
        lastName:'',
        email:'',
        depId:''
    });

    
     
    const validateForm=()=>{

        let valid=true;
        const errorsCopy={...errors}

        if(firstName==''){
            errorsCopy.firstName='First Name is Required';
            valid=false;
        }
        else
        {
            errorsCopy.firstName='';
        }
        if(lastName==''){
            errorsCopy.lastName='Last Name is Required';
            valid=false;
        }
        else
        {
            errorsCopy.lastName='';
        }
        if(email==''){
            errorsCopy.email='Email  is Required';
            valid=false;
        }
        else
        {
            errorsCopy.email='';
        }
        if(depId==''){
            errorsCopy.depId='Department Name is Required';
            valid=false;
        }
        else
        {
            errorsCopy.depId='';
        }

        setErrors(errorsCopy);
        return valid;
        // let valid = true;

        // const errorsCopy = {... errors}

        // if(firstName.trim()){
        //     errorsCopy.firstName = '';
        // } else {
        //     errorsCopy.firstName = 'First name is required';
        //     valid = false;
        // }

        // if(lastName.trim()){
        //     errorsCopy.lastName = '';
        // } else {
        //     errorsCopy.lastName = 'Last name is required';
        //     valid = false;
        // }

        // if(email.trim()){
        //     errorsCopy.email = '';
        // } else {
        //     errorsCopy.email = 'Email is required';
        //     valid = false;
        // }

        // if(depId){
        //     errorsCopy.depId = ''
        // }else {
        //     errorsCopy.depId = 'Select Department'
        //     valid = false
        // }

        // setErrors(errorsCopy);
        
        // return valid;
       
    }
     

    const saveOrUpdate=(e:FormEvent)=>{
        
        e.preventDefault();

        if(validateForm())
        {

        const employee={firstName,lastName,email,depId};

        if(id)
        {
            updateEmployeeId(Number(id),employee)
            .then(()=>navigator.push('/employee'))
            .catch((error)=>console.log(error))

        }
        else
        {
            createEmployeee(employee)
            .then(()=>navigator.push('/employee'))
            .catch((error)=> console.log(error)
            )
         }
      }
    }

    

   const pageTitle=()=>{
    const title =id?"Update Employee":"Add Employee";
      return(
       <h1>{title}</h1>
      )
  }

  useEffect(()=>{
    getAllDepartments()
    .then((response)=>setDepartments(response.data))
     .catch((error)=>console.log(error))
  })

  useEffect(()=>{
    
    

    if(id)
    {
        getEmployeeById(Number(id))
        .then((response)=>
        {
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setEmail(response.data.email)
        })
        .catch((error)=> console.log(error)
        )
    }

  },[id])

    return(
        <div className='container'>
             <div className='card col-md-6 offset-md-3 offset-md-3'>
               {
                    pageTitle()
               }
              </div>
               <div className='card-body'>
                
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>First Name:</label>
                            <input type="text"  value={firstName} placeholder="Enter the First Name" onChange={(e)=>setFirstName(e.target.value)}></input> <br />
                            { errors.firstName && <div style={{color:'red'}}> { errors.firstName} </div> }

                           
                            
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Last Name:</label>
                            <input type="text" value={lastName} placeholder="Enter the Last Name" onChange={(e)=>setLastName(e.target.value)}></input><br />
                            { errors.lastName && <div style={{color:'red'}}> { errors.lastName} </div> }
                            
                        
                         </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Email:</label>
                            <input type="text" value={email} placeholder="Enter the Email" onChange={(e)=>setEmail(e.target.value)}></input><br/>
                            { errors.email && <div style={{color:'red'}}> { errors.email} </div> }
                         </div>
                        
                        <div className='form-group mb-2'>
                            <select value={depId} onChange={(e)=>setDepartmentID(e.target.value)}>
                            <option value="Select Department">Select Department</option>
                                {
                                    departments.map( department => 
                                        <option key={department.id} value={department.id} > {department.departmentName}</option>
                                        )
                                }
                              
                             </select>
                             { errors.depId && <div style={{color:'red'}}> { errors.depId} </div> }
                         </div>    
                             <Button onClick={(e)=>saveOrUpdate(e)} variant="primary">submit</Button>
                              
                    </form>
               </div>
        </div>
    )
}

export default Employee;