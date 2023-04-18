package com.ecomm.dto;

import com.ecomm.entities.Role;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Generated;
import lombok.NoArgsConstructor;

@Builder
@Generated
@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(Include.NON_EMPTY)
public class UserDto {

	private Long userId;
	
	private String firstName;
	
	private String lastName;
	
	private String email;
    
	private String password;
	
	private String mobile_No;
    
	private String pan;
	
	private Role userRole;
    
}
    