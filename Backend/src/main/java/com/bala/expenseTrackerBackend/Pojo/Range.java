package com.bala.expenseTrackerBackend.Pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Range {
    private LocalDate startDate;
    private LocalDate endDate;

}
