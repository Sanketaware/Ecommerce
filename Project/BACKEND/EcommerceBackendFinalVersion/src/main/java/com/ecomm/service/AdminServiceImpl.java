//package com.ecomm.service;
//
//import javax.transaction.Transactional;
//
//import org.modelmapper.ModelMapper;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Service;
//
//import com.ecomm.dto.AdminDto;
//import com.ecomm.dto.LoginDto;
//import com.ecomm.entities.Role;
//import com.ecomm.entities.User;
//import com.ecomm.repository.UserRepo;
//
//@Service
//@Transactional
//public class AdminServiceImpl implements AdminService{
//
//	@Autowired
//	private UserRepo adminRepo;
//	
//	@Autowired
//	private ModelMapper mapper;
//	
//	
//	//private PasswordEncoder password;
//	
//	
//	@Override
//	public AdminDto validate(LoginDto dto) {
//		User admin = adminRepo.findByEmail(dto.getEmail());
//		if(admin.getPassword().equals(dto.getPass()))	{
//			AdminDto adminDto = mapper.map(admin, AdminDto.class);
//			return adminDto;
//			}
//		return null;
//	}
//
//	@Override
//	public void updateAdmin(AdminDto dto) {
//		System.out.println(dto);
//		User admin = adminRepo.findByEmail(dto.getEmail());
//		admin.setUserName(dto.getUserName());
//		admin.setPassword(password.encode(dto.getPass()));
//		
//		adminRepo.flush();
//		
//	}
//
//	@Override
//	public User saveAdmin(User admin) {
//		admin.setPassword(password.encode(admin.getPassword()));
//		admin.setRole(Role.ADMIN);
//		return adminRepo.save(admin);
//		
//	}
//
//}
