import axios from 'axios';


const baseUrl="http://localhost:8080/api/employees";


export const createEmployeee =(employee:any)=>axios.post(baseUrl,employee);

export const getAllEmployees =()=>axios.get(baseUrl);

export const deleteEmployeeById =(id:number)=>axios.delete(baseUrl+"/"+id);

export const getEmployeeById =(id:number)=>axios.get(baseUrl+"/"+id);

export const updateEmployeeId=(id:number,employee:any)=>axios.put(baseUrl+"/"+id,employee);





