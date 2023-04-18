package com.ecomm.dto;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class InvoiceDto {

    private Long invoiceId;

    private Double amount;

    private Integer productCount;

    private String invoiceAddress;

    private String paidBy;

    private LocalDateTime invoiceDate;

    private Long userId;

}