package com.ecomm.entities;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Invoice {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long invoiceId;
	
	@Column(nullable = false)
	private Double Amount;
	
	@Column(nullable = false)
	private int productCount;
	
	@Column(nullable = false,length = 300)
	private String InvoiceAddress;
	
	@Column(nullable = false ,length = 50)
	private String PaidBy;
	
	private LocalDateTime InvoiceDate;
	
	@ManyToOne
	@JoinColumn(name="userId")
	private User user;
}
