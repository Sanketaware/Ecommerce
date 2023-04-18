package com.ecomm.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

public class Address {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long AddressId;
	
	@Column(nullable = false, length = 20)
	private String fullAddress;
	
	@Column(nullable = false, length = 20)
	private String city;
	
	@Column(nullable = false, length = 20)
	private int pinCode;
	
	@Column(nullable = false, length = 20)
	private String state;
	
	@Column(nullable = false, length = 20)
	private String country;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="userId")
	private User user;
    
}
