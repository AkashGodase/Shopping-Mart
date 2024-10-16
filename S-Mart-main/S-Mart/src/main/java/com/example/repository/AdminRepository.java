package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entity.Admin;
import java.util.List;



public interface AdminRepository extends JpaRepository<Admin, Integer> {

	Admin findByUsername(String username);
	Admin findByEmail(String email);
	
}
