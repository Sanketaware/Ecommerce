package com.ecomm.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecomm.custom_exception.ResourceNotFoundException;
import com.ecomm.entities.Order;
import com.ecomm.entities.OrderInfo;
import com.ecomm.repository.OrderInfoRepo;

@Service
@Transactional
public class OrderInfoServiceImpl implements OrderInfoService {

	@Autowired
	private OrderInfoRepo orderInfoRepo;
	
	@Override
	public void saveOrderDetails(OrderInfo orderInfo) {
		orderInfoRepo.save(orderInfo);
	}

	@Override
	public OrderInfo findById(Long id) {
		return orderInfoRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Invalid Order Id"));
	}

	@Override
	public List<OrderInfo> findByOrder(Order order) {
		return orderInfoRepo.findByOrder(order);
	}

}
