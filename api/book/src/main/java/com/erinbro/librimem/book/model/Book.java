package com.erinbro.librimem.book.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.annotation.Nullable;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import java.util.Date;


@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "book", uniqueConstraints = {
        @UniqueConstraint(name = "id", columnNames="id")
})
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

    @Column(name = "read", nullable = false)
    private Boolean read;

    @NotBlank(message = "The author name must not be empty")
    private String author_name;

    @NotBlank(message = "The author prename must not be empty")
    private String author_prename;

    @Column(name = "current_page", nullable = true)
    private String currentPage;

    @Column(name = "language", nullable = true)
    private String language;

    @Column(name = "publishing_house",
            nullable=true,
            columnDefinition = ""
    )
    private String publishingHouse;

    @Column(name = "rating", nullable = true)
    private String rating;

    @CreatedDate
    @Column(name = "created_at")
    private Date createdAt;

    @LastModifiedDate
    @Column(name = "updated_at")
    private Date updatedAt;

}
