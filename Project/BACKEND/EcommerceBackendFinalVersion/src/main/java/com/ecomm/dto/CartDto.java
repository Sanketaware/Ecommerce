package com.ecomm.dto;

import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CartDto {

	@JsonProperty
	private Long CartId;
	
	private Long ProductId;
	
	private int quantity;
	
	private Double Price;
	
	private String ProductName;
	
	private String Brand;
	
	private String Description;
	
	private Long UserId;
	
	private MultipartFile image;
	
}
