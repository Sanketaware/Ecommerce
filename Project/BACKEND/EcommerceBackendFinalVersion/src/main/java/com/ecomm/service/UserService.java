package com.ecomm.service;

import java.util.List;

import com.ecomm.dto.UserDto;
import com.ecomm.entities.User;

public interface UserService {

	UserDto authenticateUser(String email, String pass);
	
	List<UserDto> getAllCustomer(String userRole);
	
	UserDto getDetails(Long custId);
	UserDto registerUser(UserDto customer);
	UserDto registerSeller(UserDto customer);
	UserDto updateUserDetails(Long userId, UserDto user);
	String deleteUserDetails(Long userId);
	User findById(Long sellerId);
	
}
