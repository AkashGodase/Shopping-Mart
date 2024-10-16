package com.example.ServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Service.PaymentService;
import com.example.entity.Payment;
import com.example.repository.PaymentRepository;

@Service
public class PaymentServiceImpl implements PaymentService {

	@Autowired
	private PaymentRepository paymentRepository;

	@Override
	public Payment savePayment(Payment payment) {
		return this.paymentRepository.save(payment);

	}

	@Override
	public List<Payment> getAllPayments() {
		return this.paymentRepository.findAll();
	}

}
