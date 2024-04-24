package com.gl.ems.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gl.ems.entity.Department;
import com.gl.ems.exception.resourceNotFoundException;
import com.gl.ems.repository.DepartmentRepository;

@Service
public class departmentServiceImpl implements departmentService {

	@Autowired
	DepartmentRepository depRepository;

	@Override
	public Department createDepartment(Department department) {
		// TODO Auto-generated method stub
		return depRepository.save(department);
	}

	@Override
	public Department getDepartmentById(int id) {
		Department d = null;
		d = depRepository.findById(id)
				.orElseThrow(() -> new resourceNotFoundException("Department is not exists with a given id: " + id));

		return d;
	}

	@Override
	public Department updateDepartmentById(int id, Department department) {
		Department d = null;
		d = depRepository.findById(id)
				.orElseThrow(() -> new resourceNotFoundException("Department is not exists with a given id: " + id));
		d.setDeparttmentName(department.getDeparttmentName());
		d.setDepartmentDescription(department.getDepartmentDescription());
		return depRepository.save(d);
	}

	@Override
	public List<Department> getAllDepartments() {
		// TODO Auto-generated method stub
		return depRepository.findAll();
	}

	@Override
	public void deleteDepartmentById(int id) {
		Department d = null;
		d = depRepository.findById(id)
				.orElseThrow(() -> new resourceNotFoundException("Department is not exists with a given id: " + id));
		depRepository.deleteById(id);
	}

}
