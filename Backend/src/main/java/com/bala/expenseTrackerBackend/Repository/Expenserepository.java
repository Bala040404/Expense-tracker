package com.bala.expenseTrackerBackend.Repository;

import com.bala.expenseTrackerBackend.Entity.Expense;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository

public interface Expenserepository extends JpaRepository<Expense,Long> {

    @Query(value="select * from expense where date between ?1 and ?2",nativeQuery = true)
    public List<Expense> getExpenseBetweenRange(LocalDate start,LocalDate end);
}
