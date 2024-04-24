package com.gl.ems.service;

import java.util.List;

import com.gl.ems.entity.Department;

public interface departmentService {
	Department createDepartment(Department department);

	Department getDepartmentById(int id);

	Department updateDepartmentById(int id, Department department);

	List<Department> getAllDepartments();

	void deleteDepartmentById(int id);
}
