package com.erinbro.librimem.book.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.annotation.Nullable;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import java.time.Instant;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;


@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity(name = "Book")
@Table(name = "book", uniqueConstraints = {
        @UniqueConstraint(name = "id", columnNames = "id")
})
public class Book {
    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    @Column(name = "id")
    private Integer id;

    @Column(nullable = false, name = "user_id")
    private Integer userId;

    @NotBlank(message = "The type must not be empty")
    private String type;

    @NotBlank(message = "The title must not be empty")
    private String title;


    @NotBlank(message = "The author name must not be empty")
    private String author_name;

    @Column(name = "current_page", nullable = true)
    private String currentPage;

    @Column(name = "language", nullable = true)
    private String language;

    @Column(name = "publishing_house",
            nullable = true,
            columnDefinition = ""
    )
    private String publishingHouse;

    @Column(name = "rating", nullable = true)
    private byte rating;

    @CreatedDate
    @Column(name = "created_at")
    private Instant createdAt;

    @LastModifiedDate
    @Column(name = "updated_at")
    private Instant updatedAt;

    // connections


}
