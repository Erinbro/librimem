package com.erinbro.librimem.book.controller;

import com.erinbro.librimem.book.dto.BookResponse;
import com.erinbro.librimem.book.exception.ApiRequestException;
import com.erinbro.librimem.book.model.Book;
import com.erinbro.librimem.book.service.BookService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Slf4j
@RestController
@RequestMapping(path="/api/v1/books")
@RequiredArgsConstructor
public class BookController {

    private final BookService bookService;

    @GetMapping()
    public List<Book> getAllBooks() {
        List<Book> books = this.bookService.getAllBooks();
        log.info("Gets books: ", books);
        return books;
    }

    @GetMapping("{id}")
    public Optional<Book> getBook(@PathVariable("id") int bookId) {
        Optional<Book> requestedBook = this.bookService.getBook(bookId);
        return requestedBook;
    }

    @GetMapping("{id}/exception")
    public Optional<Book> getBookException(@PathVariable("id") int bookId) {
        throw new ApiRequestException(
                "ApiRequestException for book " + bookId
        );
    }

    @PostMapping()
    public Book addBook(@Valid @RequestBody Book newBook) {
        Book addedBook = this.bookService.addBook(newBook);
        log.info("Added book: ", addedBook);
        return addedBook;
    }

    @PutMapping()
    public Book updateBook(@Valid @RequestBody Book book) {
        return bookService.updateBook(book);
    }

    @DeleteMapping(path = "{bookId}")
    public Book deleteBook(@PathVariable("bookId") Integer bookId) {
        return bookService.deleteBook(bookId);
    }

}
