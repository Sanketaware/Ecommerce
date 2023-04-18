package com.ecomm.service;

import java.util.List;

import com.ecomm.dto.CartDto;

public interface CartService {

	List<CartDto> getAllCartItems(Long CustomerId); 
//	String deleteById(Long productId); 
	
}
