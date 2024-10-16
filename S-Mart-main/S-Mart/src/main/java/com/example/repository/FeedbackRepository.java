package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entity.Feedback;

public interface FeedbackRepository extends JpaRepository<Feedback, Integer> {

}
