package com.bala.expenseTrackerBackend.Service;

import com.bala.expenseTrackerBackend.Entity.Expense;
import com.bala.expenseTrackerBackend.Repository.Expenserepository;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Expenseservice {

    @Autowired
    private Expenserepository expenserepository;
    public List<Expense> getExpenses(){
        return expenserepository.findAll();
    }

    public Expense addExpense(Expense expense){
        if(expense.getType().equals("expenditure")){
            expense.setAmount(expense.getAmount()*-1);
        }
        return expenserepository.save(expense);
    }

    public List<Expense> getExpenseBetweenRange(LocalDate start,LocalDate end){
        return expenserepository.getExpenseBetweenRange(start,end);
    }
}
