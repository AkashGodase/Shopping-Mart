package com.example.Service;

import java.util.List;

import com.example.entity.Payment;

public interface PaymentService {
	
	
	public Payment savePayment(Payment payment);
	
	public List<Payment> getAllPayments();

}
