package com.ecomm.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecomm.entities.Order;
import com.ecomm.entities.OrderInfo;

@Repository
public interface OrderInfoRepo extends JpaRepository<OrderInfo, Long> {
	List<OrderInfo> findByOrder(Order order);
}
