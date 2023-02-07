package com.erinbro.librimem.chapter.exception;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.time.ZonedDateTime;

@Slf4j
@ControllerAdvice
public class ApiExceptionHandler {
    @ExceptionHandler(value = NotFoundException.class)
    public ResponseEntity<Object> handleNotFoundException(
            NotFoundException e
    ) {

        NotFoundException notFoundException = new NotFoundException(
                e.getMessage()
        );
        return new ResponseEntity<>(notFoundException, HttpStatus.NOT_FOUND);
    }

}
