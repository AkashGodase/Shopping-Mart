package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entity.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Integer> {

}
