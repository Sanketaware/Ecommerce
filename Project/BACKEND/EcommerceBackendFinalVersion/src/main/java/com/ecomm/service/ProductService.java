package com.ecomm.service;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.ecomm.dto.ProductDto;
import com.ecomm.dto.ProductResponseDto;
import com.ecomm.entities.Product;

public interface ProductService {

	List<ProductResponseDto> fetchProductsBySellerId(Long Id);
	List<ProductResponseDto> fetchAllProducts();
	List<ProductResponseDto> fetchproductsByCat(String category);
	List<ProductResponseDto> fetchproductsByCatAndSubcat(String category, String Subcat);
	ProductResponseDto fetchByProductId(Long Id);
	String deleteProductById(Long Id);
	Product addProduct(ProductDto dto,MultipartFile image) throws IOException;
	void updateProduct(ProductDto dto);
}
