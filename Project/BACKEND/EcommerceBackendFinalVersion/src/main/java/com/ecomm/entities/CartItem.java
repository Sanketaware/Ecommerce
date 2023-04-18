package com.ecomm.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name="cart_item")
public class CartItem {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="cart_item_id")
	private Long CartItemId;
	
	
	@Column(name="quantity")
	private int ProductCount;
	
	@Column(name="total_price")
	private double TotalPrice;
	
	@ManyToOne
	@JoinColumn(name="cartId",nullable=false)
	private Cart cart;
   
	@OneToOne
	@JoinColumn(name="productId")
	private Product product;


}
