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

import com.gl.ems.entity.Department;
import com.gl.ems.service.departmentServiceImpl;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/departments")
public class departmentController {
	@Autowired
	departmentServiceImpl depService;
	
	@PostMapping
	ResponseEntity<Department> createDepartment(@RequestBody Department department){
		Department d = depService.createDepartment(department);
		return new ResponseEntity<>(department,HttpStatus.CREATED);
	}
	
	@GetMapping("{id}")
	ResponseEntity<Department> getDepartmentById(@PathVariable("id") int id){
		Department d = depService.getDepartmentById(id);
		return new ResponseEntity(d,HttpStatus.OK);
	}
	
	@PutMapping("{id}")
	ResponseEntity<Department> updateDepartmentById(@PathVariable("id")int id,@RequestBody Department department){
		Department d = depService.updateDepartmentById(id, department);
		return new ResponseEntity(d,HttpStatus.OK);
	}
	
	@SuppressWarnings("rawtypes")
	@DeleteMapping("{id}")
	ResponseEntity<Department> deletetById(@PathVariable("id")int id){
		depService.deleteDepartmentById(id);
		return new ResponseEntity("Department deleted !!!!",HttpStatus.OK);
	}
	
	@GetMapping
	@SuppressWarnings("rawtypes")
	ResponseEntity <List<Department>> getAllDepartments(){
		List<Department> list=depService.getAllDepartments();
		return new ResponseEntity(list,HttpStatus.OK); 
	}
	
}
