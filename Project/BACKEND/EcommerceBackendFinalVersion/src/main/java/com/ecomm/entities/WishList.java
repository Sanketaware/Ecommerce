//package com.ecomm.entities;
//
//import java.time.LocalDateTime;
//import java.util.ArrayList;
//import java.util.List;
//
//import javax.persistence.Column;
//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//import javax.persistence.JoinColumn;
//import javax.persistence.OneToMany;
//import javax.persistence.OneToOne;
//
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import lombok.Setter;
//
//@Getter
//@Setter
//@NoArgsConstructor
//@Entity
//public class WishList{
//
//	
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private Long WishlistId;
//	
//	private LocalDateTime LastModified;
//	
//	@Column(nullable = false)
//	private int ProductCount;
//	
//	@OneToOne
//	@JoinColumn(name="userId")
//	private User user;
//	
//	@OneToMany
//	@JoinColumn(name="productId",nullable = true)
//	private List<Product> product = new ArrayList<>();
//}
