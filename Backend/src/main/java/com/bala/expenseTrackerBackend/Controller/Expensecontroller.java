package com.bala.expenseTrackerBackend.Controller;

import com.bala.expenseTrackerBackend.Entity.Expense;
import com.bala.expenseTrackerBackend.Pojo.Range;
import com.bala.expenseTrackerBackend.Service.Expenseservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController

public class Expensecontroller {
    @Autowired
    private Expenseservice expenseservice;
    @CrossOrigin
    @GetMapping("/expense")
    public List<Expense> getExpense(){
        return expenseservice.getExpenses();
    }

    @CrossOrigin
    @PostMapping("/expense")
    public Expense addExpense(@RequestBody Expense expense){
        return expenseservice.addExpense(expense);
    }

    @CrossOrigin
    @PostMapping("/expense/range")
    public List<Expense> getExpenseBetweenRange(@RequestBody Range range){
        return expenseservice.getExpenseBetweenRange(range.getStartDate(),range.getEndDate());
    }
}
