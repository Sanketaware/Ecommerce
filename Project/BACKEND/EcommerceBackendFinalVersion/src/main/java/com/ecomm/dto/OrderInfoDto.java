package com.ecomm.dto;

import com.ecomm.entities.Product;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderInfoDto {

	private Long id;
	private Product product;
	private int qty;
}
