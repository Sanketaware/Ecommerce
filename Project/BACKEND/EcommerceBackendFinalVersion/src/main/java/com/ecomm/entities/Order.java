package com.ecomm.entities;

import java.time.LocalDateTime;

import javax.persistence.CascadeType;
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
@Table(name = "Orders")
public class Order{

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long OrderId;

	@Column(nullable = false ,insertable = true,updatable = false) 
	private LocalDateTime CreatedDate;
	
	
	@Column(nullable = false ,length = 30)
	private String OrderStatus;
	
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="userId")
	private User user;
	
	
	@OneToOne(cascade = CascadeType.ALL ,mappedBy = "order")
    private OrderInfo orderInfo;
	
	
	@OneToOne(cascade = CascadeType.ALL )
	private Invoice invoice;
	
	
}
