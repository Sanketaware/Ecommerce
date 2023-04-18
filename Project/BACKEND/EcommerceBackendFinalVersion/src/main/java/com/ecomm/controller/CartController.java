package com.ecomm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ecomm.entities.User;
import com.ecomm.service.CartService;
import com.ecomm.service.ProductService;

@CrossOrigin
@RestController
@RequestMapping("/cart")
public class CartController {

    public CartController() {
	System.out.println("Inside CartController");
    }
	
	@Autowired
	private CartService cartService; 

	@GetMapping("/{customerId}")
	public ResponseEntity<?> getAllProductsFromCart(@RequestParam Long customerId)
	{
	   System.out.println("Inside getAllProductsFromCart");	
	try {
	    	return new ResponseEntity<>(cartService.getAllCartItems(customerId),HttpStatus.OK);	
    	} catch (Exception e) {
	    	return new ResponseEntity<>("Error Processing Request",HttpStatus.NOT_FOUND);	
     	} 
	}
	
//	@DeleteMapping("/{Id}")
//	public String deleteProductById(@PathVariable Long Id)
//	{
//		System.out.println("Inside DeleteProductById");
//		return 	cartService.
//		
//	}
	
	
	
}
