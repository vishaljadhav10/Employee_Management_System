import React from 'react';
import Navigation from './Component/Navigation';
import { Switch, Route } from 'react-router-dom';
import ListDepartment from './Component/ListDepartment';
import ListEmployee from './Component/ListEmployee';
import Department from './Component/Department';
import Employee from './Component/Employee';



const Home=()=>{
  return(
    <>
      <h1>Employee Management System</h1>
    </>
  )
}
function App() {
  return (
    <>
    <Navigation/>
    <Switch>
      <Route exact path="/"><Home/></Route>
      <Route path="/listdepartment"><ListDepartment/></Route>
      <Route path="/listemployee"><ListEmployee/></Route>
      
      <Route path="/edit-department/:id"><Department/></Route>
      <Route path="/department"><ListDepartment/></Route>
      
      <Route path="/add-department"><Department/></Route>
      <Route path="/add-newEmployee"><Employee/></Route>
      <Route path="/edit-employee/:id"><Employee/></Route>
      <Route path="/employee"><ListEmployee/></Route>
    </Switch>
   </>
  );
}

export default App;
