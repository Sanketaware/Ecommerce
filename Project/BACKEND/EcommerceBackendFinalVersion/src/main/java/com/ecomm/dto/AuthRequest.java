package com.ecomm.dto;

import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AuthRequest {
	@NotBlank(message = "Email can't be blank or null")
	private String email;
	@NotBlank(message = "password can't be blank or null")
	private String password;
}
