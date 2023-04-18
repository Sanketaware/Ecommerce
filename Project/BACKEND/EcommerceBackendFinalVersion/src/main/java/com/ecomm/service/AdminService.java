package com.ecomm.service;

import com.ecomm.dto.AdminDto;
import com.ecomm.dto.LoginDto;
import com.ecomm.entities.User;

public interface AdminService {

	
	AdminDto validate(LoginDto dto);
	void updateAdmin(AdminDto admin);
	User saveAdmin(User admin);
}
