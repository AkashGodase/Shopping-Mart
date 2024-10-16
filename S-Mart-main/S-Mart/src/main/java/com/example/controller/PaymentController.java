package com.example.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.Service.PaymentService;
import com.example.entity.Payment;
import com.example.entity.User;

@Controller
public class PaymentController {

	@Autowired
	private PaymentService paymentService;

	@GetMapping("/paymentForm")
	public String showPaymentForm(Model model) {
		model.addAttribute("paymentInfo", new Payment());
		return "paymentForm";
	}

	@PostMapping("/processPayment")
	public String processPayment(Payment payment) {
		this.paymentService.savePayment(payment);

		return "thankyou";

	}

	@GetMapping("/orders")
	public String showPayments(Model model) {
		List<Payment> payments = new ArrayList<>();
		payments = this.paymentService.getAllPayments();
		System.out.println(payments);
		model.addAttribute("orderlist", payments);
		return "orderlist";
	}

}
