package com.erinbro.librimem.book.dto;


import jakarta.annotation.Nullable;
import jakarta.validation.constraints.*;
import lombok.*;

import java.time.Instant;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BookRequest {

    private Integer userId;

    @NotBlank
    private String type;

    @NotBlank
    private String title;

    @NotBlank(message = "Author name must be given")
    private String author_name;

    @NotBlank(message = "Author prename must not be empty")
    private String author_prename;

    @Nullable
    private Integer current_page;

    private String publishingHouse;

    @Min(value = 0)
    @Max(value = 5)
    private byte rating;

    private Instant createdAt;

    private Instant updatedAt;

}