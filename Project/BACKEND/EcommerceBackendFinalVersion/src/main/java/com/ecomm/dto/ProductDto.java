package com.ecomm.dto;

import java.time.LocalDateTime;

import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProductDto {

	private Long ProdId;
	
	private String productName;
	
	private String brand;
	
	private String category;
	
	private String subCategory;
	
	private String description;
	
	private double price;
	
	private MultipartFile image;
	
	private Long sellerId;
	
	private String sellerName;
	
	private LocalDateTime createdTimestamp;
	
	
}
