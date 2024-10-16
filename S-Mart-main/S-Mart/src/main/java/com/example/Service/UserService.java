package com.example.Service;

import java.util.List;

import com.example.entity.Feedback;
import com.example.entity.User;

public interface UserService {
	
	public void save(User user);

	public User findUserByUsername(String username, String password);
	
	public User findByEmail(String email);
	public void updatePassword(String email, String Password);
	public List<User> getAllUsers();
	
	public Feedback saveFeedback(Feedback feedback);

	public List<Feedback> showfeedback();
}
