package com.gl.ems.service;

import java.util.List;

import com.gl.ems.entity.Employee;

public interface employeeService {

	Employee createEmployee(Employee employee);

	Employee getEmployeeById(int id);

	Employee updateEmployeeById(int id, Employee empolyee);

	List<Employee> getAllEmployees();

	void deleteEmployeeByID(int id);


}