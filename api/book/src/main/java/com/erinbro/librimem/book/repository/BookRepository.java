package com.erinbro.librimem.book.repository;


import com.erinbro.librimem.book.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Integer>{
}
