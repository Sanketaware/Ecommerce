package com.ecomm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecomm.entities.Invoice;

@Repository
public interface InvoiceRepo extends JpaRepository<Invoice, Long> {
	/*
	 * List<CartItem> findByCartItem(Long Id);
	 */
	Invoice findByInvoiceId(Long id);
	void deleteByInvoiceId(Long id);
}
