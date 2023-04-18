package com.ecomm.dto;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductResponseDto {
	
	private String brand;
	@JsonProperty(value="prodid")
	private Long id;
	private String productname;
	private String category;
	private String subcat;
	private double price;
	private Long sellerId;
	private String description;
	private String sellerName;
	private String photo;
	private LocalDateTime createdTimestamp;
	
}
