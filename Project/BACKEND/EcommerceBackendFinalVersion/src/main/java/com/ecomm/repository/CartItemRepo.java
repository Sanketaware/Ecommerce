package com.ecomm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecomm.entities.CartItem;

@Repository
public interface CartItemRepo extends JpaRepository<CartItem, Long> {

	
	
}
