//package com.ecomm.service;
//
//import javax.transaction.Transactional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.ecomm.customexceptions.ResourceNotFoundException;
//import com.ecomm.entities.Address;
//import com.ecomm.repository.AddressRepo;
//
//
//@Service
//@Transactional
//public class AddressServiceImpl implements AddressService{
//
//	@Autowired
//	private AddressRepo addressRepo;
//	
//	@Override
//	public Address saveAddress(Address address) {
//	 	return addressRepo.save(address);
//	}
//
//	
//	@Override
//	public Address findAddress(Long id) {	
//		return addressRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Invalid Address Id"));
//	}
//
//}
