package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.Service.UserService;
import com.example.entity.User;

@Controller
public class UserResetPasswordController {

	@Autowired
	private UserService userService;
	
	@PostMapping("/ureset-password")
	public String resetPassword(@RequestParam("email") String email, @RequestParam("password") String password) {
		

		User user = userService.findByEmail(email);
		
		if (user != null) {
		 userService.updatePassword(email, password);
			return "redirect:upassword-changed";
		} else {
			return "redirect:uforgeterror";
		}

	}
	@GetMapping("/uforgeterror")
	public String passwordChanged() {
		return "uforgeterror";
	}
	@GetMapping("/upassword-changed")
	public String passwordChanged1() {
		return "upassword-changed";
	}
	
}
