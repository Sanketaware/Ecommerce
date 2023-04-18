package com.ecomm.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecomm.dto.CartDto;
import com.ecomm.entities.CartItem;
import com.ecomm.entities.Product;
import com.ecomm.entities.User;
import com.ecomm.repository.CartRepo;


@Service
@Transactional
public class CartServiceImpl implements CartService {

	@Autowired
	private CartRepo cartRepo;
	
	private CartDto buildCartDto(CartItem product) {
		return CartDto.builder()
				    .CartId(product.getCart().getCartId())
					.ProductName(product.getProduct().getProductName())
					.Brand(product.getProduct().getBrand())
					.Description(product.getProduct().getDescription())
					.build();
	}

	@Override
	public List<CartDto> getAllCartItems(Long CustomerId) {
		// TODO Auto-generated method stub
		return null;
	}
	
//	@Override
//	public List<CartDto> getAllCartItems(Long CustomerId) {
//		List<CartDto> responseProductDto = new ArrayList<CartDto>();
//		List<CartItem> responseProducts = cartRepo.findByCartItem(CustomerId);
//		     responseProducts
//		     .stream()
//		     .forEach(product -> {
//		    	 CartDto cartDto = buildCartDto(product);
//		    	 cartDto.setImage(product.getProduct().getPhoto());
//	    	 responseProductDto.add(cartDto);
//		     });
//		return  responseProductDto;
//	}


	
	
}
