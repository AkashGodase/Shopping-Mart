package com.example.ServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Service.AdminService;
import com.example.entity.Admin;
import com.example.repository.AdminRepository;

@Service
public class AdminServiceImpl implements AdminService {

	@Autowired
	private AdminRepository adminRepository;

	public Admin findUserByUsername(String username, String password) {

		Admin admin = adminRepository.findByUsername(username);

		if (admin != null && admin.getPassword().equals(password)) {
			return admin;
		}
		return null;
	}

	public void saveUser(Admin admin) {

		this.adminRepository.save(admin);
	}

	@Override
	public Admin findByEmail(String email) {

		Admin admin = adminRepository.findByEmail(email);

		return admin;
	}

	@Override
	public void updatePassword(String email, String Password) {
		Admin admin = adminRepository.findByEmail(email);
		admin.setPassword(Password);
		adminRepository.save(admin);
	}

}
