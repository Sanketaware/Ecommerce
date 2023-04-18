package com.ecomm.service;

import java.util.List;

import com.ecomm.dto.InvoiceDto;
import com.ecomm.entities.Invoice;

public interface InvoiceService {
	
	InvoiceDto getInvoiceById(Long id);
	
	Invoice fromInvoiceDtoTOEntity(InvoiceDto invoiceDto);
	
	void deleteInvoice(Long id);
	
	InvoiceDto updateInvoice(Long id, InvoiceDto invoiceDTO);
	
	List<InvoiceDto> getAllInvoices();
	
	InvoiceDto createInvoice( InvoiceDto invoiceDTO);
}
