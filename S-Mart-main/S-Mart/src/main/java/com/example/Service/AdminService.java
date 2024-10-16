package com.example.Service;

import com.example.entity.Admin;

public interface AdminService {
	
	public void saveUser(Admin admin);
	
	public Admin findUserByUsername(String username, String password);
	
	public Admin findByEmail(String email);
	
	public void updatePassword(String email, String password);

}
