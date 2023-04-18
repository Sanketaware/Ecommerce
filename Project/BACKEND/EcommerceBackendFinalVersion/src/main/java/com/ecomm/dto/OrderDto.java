package com.ecomm.dto;

import java.util.List;

import com.ecomm.entities.Order;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderDto {

	private Order order;
	private List<OrderInfoDto> details;
}
