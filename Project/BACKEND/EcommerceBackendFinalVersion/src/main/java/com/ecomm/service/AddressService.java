package com.ecomm.service;

import com.ecomm.entities.Address;

public interface AddressService {

	Address saveAddress(Address address);
	Address findAddress(Long id);
}
