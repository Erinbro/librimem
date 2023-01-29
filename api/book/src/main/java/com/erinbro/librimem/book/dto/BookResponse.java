package com.erinbro.librimem.book.dto;

public record BookResponse(
        Integer id,
        String title,
        String author_prename,
        String author_name,
        String current_page,
        String language,
        String publishing_house,
       Integer rating,
       Boolean read,
       String type
) {
}
