package com.ecomm.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecomm.entities.Cart;
import com.ecomm.entities.CartItem;

@Repository
public interface CartRepo extends JpaRepository<Cart, Long>{
 
	List<CartItem> findByCartItem(Long Id);
	
}