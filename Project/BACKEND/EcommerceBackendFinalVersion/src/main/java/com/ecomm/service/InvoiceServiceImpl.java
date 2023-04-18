package com.ecomm.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecomm.dto.InvoiceDto;
import com.ecomm.entities.Invoice;
import com.ecomm.entities.User;
import com.ecomm.repository.InvoiceRepo;

@Transactional
@Service
public class InvoiceServiceImpl implements InvoiceService{

    @Autowired
    private InvoiceRepo invoiceDao;

    public InvoiceDto getInvoiceById(Long id) {
        Invoice invoice = invoiceDao.findByInvoiceId(id);//.orElseThrow(() -> new ResourceNotFoundException("Invoice not found with id " + id));
        return buildInvoicedto(invoice);
    }

	public InvoiceDto createInvoice( InvoiceDto invoiceDTO) {
       Invoice invoice = fromInvoiceDtoTOEntity(invoiceDTO);
       invoice.setInvoiceId(invoiceDTO.getInvoiceId());
        invoiceDao.save(invoice);
        return buildInvoicedto(invoice);
    }

    public List<InvoiceDto> getAllInvoices() {
        List<Invoice> invoices = invoiceDao.findAll();
        return invoices.stream().map(this::buildInvoicedto).collect(Collectors.toList());
    }

    public InvoiceDto updateInvoice(Long id, InvoiceDto invoiceDTO) {
        Invoice invoice = invoiceDao.findByInvoiceId(id);//.orElseThrow(() -> new ResourceNotFoundException("Invoice not found with id " + id));
        invoice.setAmount(invoiceDTO.getAmount());
        invoice.setProductCount(invoiceDTO.getProductCount());
        invoice.setInvoiceAddress(invoiceDTO.getInvoiceAddress());
        invoice.setPaidBy(invoiceDTO.getPaidBy());
        invoice.setInvoiceDate(invoiceDTO.getInvoiceDate());
        invoiceDao.save(invoice);
        return buildInvoicedto(invoice);
    }

    public void deleteInvoice(Long id) {
        invoiceDao.deleteByInvoiceId(id);
    }

    public Invoice fromInvoiceDtoTOEntity(InvoiceDto invoiceDTO) {
        Invoice invoice = new Invoice();
        invoice.setAmount(invoiceDTO.getAmount());
        invoice.setProductCount(invoiceDTO.getProductCount());
        invoice.setInvoiceAddress(invoiceDTO.getInvoiceAddress());
        invoice.setPaidBy(invoiceDTO.getPaidBy());
        invoice.setInvoiceDate(invoiceDTO.getInvoiceDate());
        User user = new User();
        user.setUserId(invoiceDTO.getUserId());
        invoice.setUser(user);
        return invoice;
    }
    
    private InvoiceDto buildInvoicedto(Invoice invoice)
    {
    	return InvoiceDto
    			.builder()
    			.invoiceId(invoice.getInvoiceId())
    			.paidBy(invoice.getPaidBy())
    			.invoiceAddress(invoice.getInvoiceAddress())
    			.productCount(invoice.getProductCount())
    			.amount(invoice.getAmount())
    			.invoiceDate(invoice.getInvoiceDate())
    			.build();			
    }
    
}
