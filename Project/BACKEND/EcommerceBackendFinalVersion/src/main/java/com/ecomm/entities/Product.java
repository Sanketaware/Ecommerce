package com.ecomm.entities;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="products")
public class Product {
	
	
	

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long ProductId;
	
	@Column(nullable = false, length = 50,unique = true)
	private String productName;
	
	@Column(nullable = false, length = 50)
	private String brand;
	
	@Column(nullable = false)
	private double price;
	
	@Column(nullable=false,length=100)
	private String description;
	
	private String category;
	
	private String subcategory;
	
	private LocalDateTime createdTimeStamp;
	
	private String photo;
	
	@ManyToOne
	@JoinColumn(name="userId", nullable = false)
	private User user;

//	@ManyToOne(cascade = CascadeType.ALL ,fetch =FetchType.EAGER)
//	@JoinColumn(name="categoryId")
//	private Category category;

	@OneToMany(cascade = CascadeType.ALL,mappedBy = "product")
	private List<OrderInfo> orderInfo;
	
	
	public Product(Long productId, String productName, String brand, double price, String description) {
		super();
		ProductId = productId;
		this.productName = productName;
		this.brand = brand;
		this.price = price;
		this.description = description;
		
	}
}
