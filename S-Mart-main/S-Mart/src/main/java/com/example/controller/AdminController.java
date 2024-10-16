package com.example.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.Service.AdminService;
import com.example.entity.Admin;
import com.example.entity.User;

@Controller
public class AdminController {

	@Autowired
	private AdminService adminService;

	@PostMapping("/adminlogin")
	public String Adminlogin(@RequestParam("username") String username, @RequestParam("password") String password,
			Model model) {
		Admin admin = this.adminService.findUserByUsername(username, password);
		if (admin != null) {
			return "redirect:adminaccess";
		} else {
			return "redirect:adminlogin";
		}

	}

	@PostMapping("/register")
	public String showRegistrationForm(Admin admin, Model model) {
			adminService.saveUser(admin);
			model.addAttribute("message", "User saved successfully!");
			return "redirect:/asuccessPage";
		
	}
	

	@GetMapping("/asuccessPage")
	public String processRegistrationForm() {
		
		return "asuccessPage";
	}

	@GetMapping("/adminaccess")
	public String adminhome() {
		return "adminaccess";
	}

	@GetMapping("/adminlogin")
	public String adminLogin() {

		return "adminlogin";
	}

}
