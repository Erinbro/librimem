package com.erinbro.librimem.book.service;

import com.erinbro.librimem.book.model.Book;
import com.erinbro.librimem.book.repository.BookRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.jpa.repository.Query;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static org.junit.jupiter.api.Assertions.*;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@ExtendWith(SpringExtension.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class BookServiceTests {

    @Autowired
    private BookRepository bookRepository;
    private BookService underTest;


    @BeforeEach
    void setUp() {
        underTest = new BookService(bookRepository);
    }

    @AfterEach
    void tearDown() {
        bookRepository.deleteAll();
    }

    @Test
    void getAllBooks() {
        // NOTE Given the data
        Book book1 = new Book(1,"BOOK","title",false,"a","b","1","DE","Random House","5");

        int numberOfRowsBefore = underTest.getAllBooks().size();

        // NOTE When
        bookRepository.saveAll(Arrays.asList(book1));

        int numberOfRowsAfter = underTest.getAllBooks().size();

        // NOTE Then
        assertEquals(numberOfRowsBefore + 1,numberOfRowsAfter + 1);
    }

    @Test
    void getBook() {
        Book book1 = new Book(1,"BOOK","title",false,"a","b","1","DE","Random House","5");

        bookRepository.save(book1);

    Optional<Book> actual =     underTest.getBook(book1.getId());
    assertEquals(false, actual.isEmpty());
    assertEquals(1, actual.get().getId());
    assertEquals("BOOK", actual.get().getType());

    }

    @Test
    void addBook() {

    }

    @Test
    void updateBook() {

    }
}
