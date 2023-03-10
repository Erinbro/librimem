/bin/bash: python: command not found

import com.erinbro.librimem.book.clients.webflux.UserClient;

import com.erinbro.librimem.book.dto.AuthorizationRequestDto;
import com.erinbro.librimem.book.dto.AuthorizationResponseDto;
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

    private final UserClient userClient;

    private AuthorizationResponseDto getUserData(String token) {
        AuthorizationRequestDto req = AuthorizationRequestDto
                .builder()
                .token(token)
                .build();
        AuthorizationResponseDto res = userClient.authorizeRequest(req);
        return res;
    }

    public List<Book> getAllBooks(String token) throws Exception {
        AuthorizationResponseDto userData = getUserData(token);
        int userId = userData.getUserId();
        Optional<List<Book>> requestedBooks = bookRepository
                .findBooksByUserId(userId);
        if (requestedBooks.isEmpty()) throw new Exception("No user");
        log.info("All books are fetched");
        return requestedBooks.get();
    }

    public Optional<Book> getBook(int bookId) {
        Optional<Book> requestedBook = bookRepository.findById(bookId);
        if (requestedBook.isEmpty()) throw new NotFoundException("Book with Id: " + bookId + " wa not found");

        return requestedBook;
    }

    public Book addBook(Book newBook, String token) {
        AuthorizationResponseDto userData = getUserData(token);
        int userId = userData.getUserId();
        newBook.setUserId(userId);
        Book addedBook = bookRepository.save(newBook);
        log.info("Received new book: ", newBook);
        return addedBook;
    }

    public Book updateBook(Book updatedBook) {
        return bookRepository.save(updatedBook);
    }

    public Book deleteBook(int bookId) {
        Optional<Book> deletedBook = bookRepository.findById(bookId);
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
