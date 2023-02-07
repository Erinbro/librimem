package com.erinbro.librimem.book.service;

import com.erinbro.librimem.book.dto.BookResponse;
import com.erinbro.librimem.book.exception.NotFoundException;
import com.erinbro.librimem.book.model.Book;
import com.erinbro.librimem.book.repository.BookRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class BookService {


     private final BookRepository bookRepository;

    public List<Book> getAllBooks() {
        log.warn("All books are fetched");
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

    public Book deleteBook(int bookId) {
        Optional<Book> deletedBook =  bookRepository.findById(bookId);
        bookRepository.deleteById(bookId);
        log.info("Deleted book with id {} and title {}", deletedBook.get().getId(), deletedBook.get().getTitle());

        // TODO Delete all chapters
        //Mono<ChapterDeleteResponse> chapterDeleteResponseMono = chapterClient.deleteAllChaptersFromBook(bookId);

        // TODO Delete all flashcards
        // TODO Delete all notes
        // TODO Delete all words
        // TODO Delete all citations
        return deletedBook.get();
    }

}
