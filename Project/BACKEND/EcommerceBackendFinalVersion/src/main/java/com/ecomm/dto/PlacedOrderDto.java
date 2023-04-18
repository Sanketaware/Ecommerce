package com.ecomm.dto;

import java.util.List;

import com.ecomm.entities.Address;
import com.ecomm.entities.Invoice;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class PlacedOrderDto {

	private Address address;
	private List<CartDto> cart;
	private Long customerid;
	private Invoice invoice;
}
