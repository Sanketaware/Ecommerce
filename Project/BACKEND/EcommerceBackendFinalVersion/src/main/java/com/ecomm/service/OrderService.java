package com.ecomm.service;

import java.util.List;

import com.ecomm.entities.Order;
import com.ecomm.entities.User;

public interface OrderService {

	Order saveOrder(Order order);
	List<Order> getAllOrders();
	List<Order> getCustomerOrders(User customer);
	Order findById(Long id);
}
