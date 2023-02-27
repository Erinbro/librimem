package com.erinbro.librimem.book.repository;


import com.erinbro.librimem.book.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface BookRepository extends JpaRepository<Book, Integer> {

    @Query("SELECT b FROM Book b WHERE b.userId = :userId")
    public Optional<List<Book>> findBooksByUserId(@Param("userId") Integer userId);
}
