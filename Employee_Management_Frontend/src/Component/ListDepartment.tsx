import { useEffect, useState } from "react";
import { getAllDepartments,deleteDepartment } from "../Services/DepartmentServices";
import { Button, Table } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

type department={
  id:number;
  departtmentName:string;
  departmentDescription:string;
}




const ListDepartment:React.FC=()=>{
  
    const history=useHistory();
    const [departments,setDepartments]=useState<department[]>([])

    const updateDepartment=(id:number)=>{
      history.push(`/edit-department/${id}`);
    }

    const ListDepartments=()=>{
      getAllDepartments()
      .then((response)=>{
        setDepartments(response.data)
        console.log(response.data);
        console.log(departments.length);
      })
      .catch((error)=>{
        console.log(error);
      })
    }

    const removeDepartment=(id:number)=>{
      deleteDepartment(id)
      .then(()=>ListDepartments())
      .catch((error)=>console.log(error));
    }

    useEffect(()=>ListDepartments(),[])


    return(
        <>
        <Link to='/add-department' className='btn btn-primary mb-2'>Add Department</Link>
          <h1>List Departments</h1> 
         
          <Table striped bordered hover>
            <thead>
              <tr>
          
              <th>Department ID</th>
              <th>Department Name</th>
              <th>Department Description</th>
              <th>Actions</th>
        </tr>
      </thead>
      <tbody>
               { 
                    departments.map(department=>
                           <tr key={department.id}> 
                               <td>{department.id}</td>
                               <td>{department.departtmentName}</td>
                               <td>{department.departmentDescription}</td>
                               <td>
                               <Button onClick={()=>updateDepartment(department.id)} variant="primary">Update</Button>{' '}
                               <Button onClick={()=>removeDepartment(department.id)} variant="danger">Delete</Button>{' '}
                               </td>
                            </tr>
                          )
               }
  </tbody>

  </Table>
 </>
    );
}

export default ListDepartment;