package com.ecomm.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecomm.custom_exception.ResourceNotFoundException;
import com.ecomm.entities.Order;
import com.ecomm.entities.User;
import com.ecomm.repository.OrderRepo;

@Service
@Transactional
public class OrderServiceImpl implements OrderService {

	@Autowired
	private OrderRepo orderRepo;
	
	@Override
	public Order saveOrder(Order order) {
		// TODO Auto-generated method stub
		return orderRepo.save(order);
	}

	@Override
	public List<Order> getAllOrders() {
		
		return orderRepo.findAll();
	}

	@Override
	public List<Order> getCustomerOrders(User customer) {
		
		return orderRepo.findByUserRole(customer.getRole());
	}

	@Override
	public Order findById(Long id) {
		
		return orderRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Order Id  !!"));
	}

}
