package com.ecomm.controller;

import java.io.IOException;
import java.util.List;

import org.hibernate.internal.build.AllowSysOut;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ecomm.dto.ProductDto;
import com.ecomm.dto.ProductResponseDto;
import com.ecomm.service.ProductService;

@CrossOrigin
@RestController
@RequestMapping("/products")
public class ProductController {

    public ProductController() {
	System.out.println("Inside ProductController");
    }
	
	@Autowired
	private ProductService productService; 

	
	
	@GetMapping("/allproducts")
	public ResponseEntity<?> getAllProducts()
	{
	   System.out.println("Inside getAllProducts");	
	   List<ProductResponseDto> pdo = productService.fetchAllProducts();
       pdo.forEach((n) -> System.out.println(n));
	try {	
	    	return new ResponseEntity<>(productService.fetchAllProducts(),HttpStatus.OK);
	    
    	} catch (Exception e) {
	    	return new ResponseEntity<>("Error Processing Request",HttpStatus.NOT_FOUND);	
     	} 
	}
	
     
   	@GetMapping("/{Id}")
	public ResponseEntity<?> getProductById(@PathVariable Long Id)
	{
		System.out.println("Inside getProductById");
		try {
	    	return new ResponseEntity<>(productService.fetchByProductId(Id),HttpStatus.OK);	
    	} catch (Exception e) {
	    	return new ResponseEntity<>("Invalid Product Id",HttpStatus.NOT_FOUND);	
     	} 
	}
	
   	@GetMapping("/cats")
	public ResponseEntity<?> findCategoryProducts(@RequestParam String category) {
   		System.out.println("Inside FetchCategoryProducts");
		return new ResponseEntity<>(productService.fetchproductsByCat(category),HttpStatus.OK) ;
	}
	
   	@GetMapping("/cats/subcat")
	public ResponseEntity<?> findCategoryProductsByCatSubcat(@RequestParam String category,@RequestParam String subcat ) {
   		System.out.println("Inside findCategoryProductsByCatSubcat");
		return new ResponseEntity<>(productService.fetchproductsByCatAndSubcat(category,subcat),HttpStatus.OK) ;
	}
   	
   	
   	//@PreAuthorize("hasRole('SELLER')")
   	@PostMapping("/save")
	public ResponseEntity<?> saveProduct(ProductDto dto) throws IOException {
   		System.out.println("Inside saveProduct");
		return new ResponseEntity<>(productService.addProduct(dto,dto.getImage()),HttpStatus.OK);
	}
   	
   	//@PreAuthorize("hasRole('SELLER')")
	@PutMapping("/{id}")
	public ResponseEntity<?> updateProduct(@RequestBody ProductDto dto,@PathVariable Long id) {	
   		System.out.println("Inside updateProduct");
   		productService.updateProduct(dto);
   		return new ResponseEntity<>("Succefully Updated",HttpStatus.OK);		
	}
   	
   //	@PreAuthorize("hasRole('SELLER')")
	@DeleteMapping("/{Id}")
	public ResponseEntity<?> deleteProductById(@PathVariable Long Id)
	{
   		System.out.println("Inside deleteProductById");
		 	productService.deleteProductById(Id);
		 	return new ResponseEntity<>("Succesfully deleted",HttpStatus.OK);
	}
	
}