package com.ecomm.image_utils;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

import com.ecomm.dto.ProductDto;
import com.ecomm.entities.Product;

public interface ImageService {

	Product saveImage(ProductDto dto,MultipartFile multiFile) throws IOException;
	byte[] getImage(Long id) throws IOException;
}

