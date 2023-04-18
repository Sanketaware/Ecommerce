package com.ecomm.service;

import java.util.List;

import com.ecomm.entities.Order;
import com.ecomm.entities.OrderInfo;

public interface OrderInfoService {

	void saveOrderDetails(OrderInfo od);
	OrderInfo findById(Long id);
	List<OrderInfo> findByOrder(Order order);
}
