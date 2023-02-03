package com.erinbro.librimem.book.service;

import com.erinbro.librimem.book.dto.BookResponse;
import com.erinbro.librimem.book.exception.NotFoundException;
import com.erinbro.librimem.book.model.Book;
import com.erinbro.librimem.book.repository.BookRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class BookService {

    private final static Logger LOGGER = LoggerFactory.getLogger(BookService.class);

    private final BookRepository bookRepository;

    public List<Book> getAllBooks() {
        LOGGER.warn("All books are fetched");
        List<Book> requestedBooks = bookRepository.findAll();
        return requestedBooks;
    }

    public Optional<Book> getBook(int bookId) {
        Optional<Book> requestedBook = bookRepository.findById(bookId);
        if (requestedBook.isEmpty()) throw new NotFoundException("Book with Id: " + bookId + " wa not found");

        return requestedBook;
    }

    public Book addBook(Book newBook) {
       Book addedBook = bookRepository.save(newBook);
        log.info("Received new book: ", newBook);
       return addedBook;
    }

    public Book updateBook(Book updatedBook) {
        return bookRepository.save(updatedBook);
    }
}
