package com.ecomm.entities;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Cart{


	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long CartId;
	
	
	private LocalDateTime ModifiedDate;
	
	
	private String OrderPlaced;
	
	@OneToOne
	@JoinColumn(name="customerId")
	private User CartOwner;
	
	@OneToMany(cascade = CascadeType.ALL,mappedBy = "cart")
	private List<CartItem> cartItem;
	
//
//	@OneToOne
//	@JoinColumn(name="orderId")
//    private Order order; 
	
}
