//package com.ecomm.custom_details;
//
//import static com.ecomm.entities.Role.ADMIN;
//
//import java.util.ArrayList;
//import java.util.Collection;
//import java.util.List;
//import java.util.stream.Collectors;
//
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;
//
//import com.ecomm.entities.Role;
//import com.ecomm.entities.User;
//
//import lombok.ToString;
//
//@ToString
//public class CustomUserDetails implements UserDetails {
//
//	private static final long serialVersionUID = -1711265124531152677L;
//
//	private User admin;
//	
//	private User customer;
//	
//	private User seller;
//	
//	
//	public CustomUserDetails(User admin ) {
//		super();
//		this.admin = admin;
//	}
//
//
//	@Override
//	public Collection<? extends GrantedAuthority> getAuthorities() {
//
//		List<Role> role = new ArrayList<>();
//
//		if (admin != null) {
//			role.add(ADMIN);
//			return role.stream().map(r -> new SimpleGrantedAuthority(r.name())).collect(Collectors.toList());
//		} else if (customer != null) {
//			role.add(Role.CUSTOMER);
//			return role.stream().map(r -> new SimpleGrantedAuthority(r.name())).collect(Collectors.toList());
//
//		} else {
//			role.add(Role.SELLER);
//			return role.stream().map(r -> new SimpleGrantedAuthority(r.name())).collect(Collectors.toList());
//		}
//
//	}
//
//	@Override
//	public String getPassword() {
//		if (admin != null)
//			return admin.getPassword();
//		else if (customer != null)
//			return customer.getPassword();
//		else
//			return seller.getPassword();
//	}
//
//	@Override
//	public String getUsername() {
//		if (admin != null)
//			return admin.getEmail();
//		else if (customer != null)
//			return customer.getEmail();
//		else
//			return seller.getEmail();
//	}
//
//	public String getName() {
//
//		if (admin != null)
//			return admin.getUserName();
//		else if (customer != null)
//			return customer.getUserName();
//		else
//			return seller.getUserName();
//	}
//
//	@Override
//	public boolean isAccountNonExpired() {
//
//		return true;
//	}
//
//	@Override
//	public boolean isAccountNonLocked() {
//
//		return true;
//	}
//
//	@Override
//	public boolean isCredentialsNonExpired() {
//
//		return true;
//	}
//
//	@Override
//	public boolean isEnabled() {
//
//		return true;
//	}
//
//
//}
