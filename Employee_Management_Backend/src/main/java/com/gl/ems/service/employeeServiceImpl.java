package com.gl.ems.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gl.ems.entity.Employee;
import com.gl.ems.exception.resourceNotFoundException;
import com.gl.ems.repository.EmployeeRepository;

@Service
public class employeeServiceImpl implements employeeService {
	
	@Autowired
	EmployeeRepository empRepository;
	
	@Override
	public Employee createEmployee (Employee employee) {
		return empRepository.save(employee);
	}
	
	@Override
	public Employee getEmployeeById(int id) {
		 return empRepository.findById(id)
				 .orElseThrow(()->new resourceNotFoundException("Employee with id "+id+" does not exists."));
	 }
	@Override
	public Employee updateEmployeeById(int id,Employee employee) {
		Employee e = null;
		e=empRepository.findById(id)
				 .orElseThrow(()->new resourceNotFoundException("Employee with id "+id+" does not exists."));
		e.setFirstName(employee.getFirstName());
		e.setLastName(employee.getLastName());
		e.setEmail(employee.getEmail());
		 return empRepository.save(e);
	 }
	@Override
	public List<Employee> getAllEmployees(){
		 return empRepository.findAll();
	 }

	@Override
	public void deleteEmployeeByID(int id) {
		// TODO Auto-generated method stub
		empRepository.deleteById(id);
		
	}

	
}
