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
import com.example.Service.UserService;
import com.example.entity.Admin;
import com.example.entity.Feedback;
import com.example.entity.User;

@Controller
public class UserController {

	@Autowired
	private UserService userService;

	@PostMapping("/userlogin")
	public String userlogin(@RequestParam("username") String username, @RequestParam("password") String password,
			Model model) {
		User user = this.userService.findUserByUsername(username, password);
		if (user != null) {
			return "redirect:useraccess";
		} else {
			return "redirect:userlogin";
		}

	}

	@PostMapping("/user-register")
	public String showRegistrationForm(User user, Model model) {
		userService.save(user);
		model.addAttribute("message", "User saved successfully!");
		return "redirect:/usuccessPage";

	}

	@GetMapping("/user")
	public String showUsers(Model model) {
		List<User> users = new ArrayList<>();
		users = this.userService.getAllUsers();
		model.addAttribute("userlist", users);
		return "userlist";
	}

	@GetMapping("/feedbackget")
	public String showfeedback(Model model) {
		List<Feedback> feedback = this.userService.showfeedback();
		System.out.println(feedback);
		model.addAttribute("feedbacktable", feedback);
		return "feedbacktable";
	}

	@PostMapping("/submit")
	public String submitFeedback(Feedback feedback) {
		this.userService.saveFeedback(feedback);
		return "redirect:/feedbkthankyou";
	}

	@GetMapping("/feedbkthankyou")
	public String processRegistrationForm1() {

		return "feedbkthankyou";
	}

	@GetMapping("/usuccessPage")
	public String processRegistrationForm() {

		return "usuccessPage";
	}

	@GetMapping("/useraccess")
	public String userhome() {
		return "useraccess";
	}

	@GetMapping("/userlogin")
	public String userLogin() {

		return "userlogin";
	}

}
