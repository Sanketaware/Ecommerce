package com.ecomm.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecomm.entities.Order;
import com.ecomm.entities.Role;

@Repository
public interface OrderRepo extends JpaRepository<Order, Long> {
	List<Order> findByUserRole(Role customer);
}
