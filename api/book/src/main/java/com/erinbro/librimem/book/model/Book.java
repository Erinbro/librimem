package com.erinbro.librimem.book.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.annotation.Nullable;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Book {
    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    private Integer id;
    @NotBlank(message = "The type must not be empty")
    private String type;
    @NotBlank(message = "The title must not be empty")
    private String title;
    private Boolean read;
    @NotBlank(message = "The author name must not be empty")
    private String author_name;
    @NotBlank(message = "The author prename must not be empty")
    private String author_prename;
    @Nullable
    private String currentPage;
    @Nullable
    private String language;
    @Nullable
    private String publishingHouse;
    @Nullable
    private String rating;

}
