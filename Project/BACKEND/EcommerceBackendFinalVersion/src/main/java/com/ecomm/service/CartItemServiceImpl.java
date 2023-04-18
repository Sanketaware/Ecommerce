package com.ecomm.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecomm.repository.CartItemRepo;

@Service
@Transactional
public class CartItemServiceImpl implements CartItemService {
	
	@Autowired
	private CartItemRepo cartInfoRepo;
	
	
	@Override
	public String deleteProductById(Long Id) {
		cartInfoRepo.deleteById(Id);	
		return "Product with Id = "+Id+" deleted Successfully";

	}



}
