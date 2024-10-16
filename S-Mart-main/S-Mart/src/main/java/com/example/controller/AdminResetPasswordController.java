package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.Service.AdminService;
import com.example.entity.Admin;

@Controller
public class AdminResetPasswordController {

	@Autowired
	private AdminService adminService;
	
	

	@PostMapping("/reset-password")
	public String resetPassword(@RequestParam("email") String email, @RequestParam("password") String password) {
		

		Admin admin = adminService.findByEmail(email);
		
		if (admin != null) {
		 adminService.updatePassword(email, password);
			return "redirect:apassword-changed";
		} else {
			return "redirect:forgeterror";
		}

	}


	@GetMapping("/forgeterror")
	public String passwordChanged() {
		return "forgeterror";
	}
	@GetMapping("/apassword-changed")
	public String passwordChanged1() {
		return "apassword-changed";
	}
}
