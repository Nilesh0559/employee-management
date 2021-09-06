package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.model.Employee;
import com.app.repository.EmployeeRepo;

@RestController
@RequestMapping("/api/emp")
public class EmployeeController {

	@Autowired
	private EmployeeRepo empRepo;
	
	@GetMapping("/employee-list")
	public List<Employee> getEmployees(){
		System.out.println("in getEmployees()...");
		return empRepo.findAll();
	}
	
	@PostMapping("/add-employee")
	public ResponseEntity<String> addEmployee(@RequestBody Employee emp){
		System.out.println("in addEmployee()...");
		empRepo.save(emp);
		return new ResponseEntity<String>("Employee added successfully...", HttpStatus.OK);
	}
	
	@PutMapping("/update-employee")
	public ResponseEntity<String> updateEmployee(@RequestBody Employee emp){
		System.out.println("in updateEmployee()...");
		empRepo.save(emp);
		return new ResponseEntity<String>("Employee updated successfully...", HttpStatus.OK);
	}
}
