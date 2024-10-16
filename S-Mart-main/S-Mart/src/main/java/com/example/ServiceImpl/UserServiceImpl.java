package com.example.ServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Service.UserService;
import com.example.entity.Admin;
import com.example.entity.Feedback;
import com.example.entity.User;
import com.example.repository.FeedbackRepository;
import com.example.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private FeedbackRepository feedbackRepository;

	@Override
	public User findUserByUsername(String username, String password) {

		User user = userRepository.findByUsername(username);

		if (user != null && user.getPassword().equals(password)) {
			return user;
		}
		return null;
	}

	@Override
	public void save(User user) {

		this.userRepository.save(user);
	}
	@Override
	public User findByEmail(String email) {

		User admin = userRepository.findByEmail(email);

		return admin;
	}

	@Override
	public void updatePassword(String email, String Password) {
		User user = userRepository.findByEmail(email);
		user.setPassword(Password);
		userRepository.save(user);
	}

	@Override
	public List<User> getAllUsers() {
		List<User> list = this.userRepository.findAll();
		return list;
	}

	@Override
	public Feedback saveFeedback(Feedback feedback) {

		Feedback feedback2 = this.feedbackRepository.save(feedback);
		return feedback2;
		
	}

	@Override
	public List<Feedback> showfeedback() {
		List<Feedback> feedbacks = this.feedbackRepository.findAll();
		return feedbacks;
	}

}
