//package com.ecomm.entities;
//
//import java.util.ArrayList;
//
//import javax.persistence.CascadeType;
//import javax.persistence.Column;
//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//import javax.persistence.OneToMany;
//
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import lombok.Setter;
//
//import java.util.List;
//
//
//@Getter
//@Setter
//@NoArgsConstructor
//@Entity
//public class Category {
//	
////	@Column(nullable = false ,length = 10)
////	private String Gender; 
////	
//	
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private Long categoryId;
//	
//	@Column(name = "category_name", length = 30, unique = true)
//	private String categoryName;
//	
//	@Column(name="sub_cat",length = 30)
//	private String subCat; 
//	
//	@Column( length = 100)
//	private String description;
//	
//	@OneToMany(cascade = CascadeType.ALL,orphanRemoval = true,mappedBy = "category")
//	private List<Product> products = new ArrayList<>();
//
//	public Category(String categoryName, String subCat, String description) {
//		super();
//		this.categoryName = categoryName;
//		this.subCat = subCat;
//		this.description = description;
//	}
//
//}
