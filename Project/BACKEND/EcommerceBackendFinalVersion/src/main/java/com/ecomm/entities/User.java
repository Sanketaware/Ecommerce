package com.ecomm.entities;

import java.time.LocalDateTime;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
@Entity
@Table(name ="users")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long userId;
	
	
	@Enumerated(EnumType.STRING)
	private Role role;
	
	
	@Column(name ="LastLogin_Timestamp",insertable = true , updatable = false , nullable = true)
    private LocalDateTime CreatedTimeStamp;
    
	@Column(unique = true, nullable = false, length = 30)
	private String email;
	
	@Column(nullable = false ,length = 100)
    private String password;
    
	@OneToOne(cascade = CascadeType.ALL,mappedBy="user",orphanRemoval = true)
	private UserInfo userInfo;
	
	@OneToOne(cascade = CascadeType.ALL,mappedBy = "CartOwner",orphanRemoval = true)
	private Cart shoppingcart;


	public User( Role role, LocalDateTime CreatedTimeStamp, String password) {
		super();
		this.role = role;
		this.CreatedTimeStamp = CreatedTimeStamp;
		this.password = password;
	}

}