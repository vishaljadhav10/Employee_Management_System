package com.gl.ems.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.gl.ems.entity.Employee;
import com.gl.ems.service.employeeServiceImpl;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/employees")
public class employeeController {
	@Autowired
	employeeServiceImpl empService;
	
	@PostMapping
	ResponseEntity<Employee> createEmployee(@RequestBody Employee employee){
		Employee e = empService.createEmployee(employee);
		return new ResponseEntity(e, HttpStatus.CREATED);
	}
	
	@GetMapping("{id}")
	ResponseEntity<Employee> getEmployeeById(@PathVariable("id") int id){
		Employee e = empService.getEmployeeById(id);
		return new ResponseEntity(e,HttpStatus.OK);
	}
	
	@PutMapping("{id}")
	ResponseEntity<Employee> updateEmployeeById(@PathVariable("id")int id,@RequestBody Employee employee){
		Employee d = empService.updateEmployeeById(id, employee);
		return new ResponseEntity(d,HttpStatus.OK);
	}
	
	@DeleteMapping("{id}")
	ResponseEntity<Employee> deletetById(@PathVariable("id")int id){
		empService.deleteEmployeeByID(id);
		return new ResponseEntity("Department deleted !!!!",HttpStatus.OK);
	}
	
	@GetMapping
	ResponseEntity <List<Employee>> getAllEmployees(){
		List<Employee> list=empService.getAllEmployees();
		return new ResponseEntity(list,HttpStatus.OK); 
	}
}
