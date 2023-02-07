package com.erinbro.librimem.chapter.model;

import jakarta.annotation.Nonnull;
import jakarta.annotation.Nullable;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import java.time.Instant;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

/**
 * Entity for Chapter
 */
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity(name = "Chapter")
@Table(name = "chapter", uniqueConstraints = {
        @UniqueConstraint(name = "index", columnNames= "index")
})
public class Chapter {
    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    @Column(name = "id")
    private Integer id;

    @Column(name = "user_id",  nullable = false)
    private Integer userId;

    @Column(name = "entity_id")
    private Integer entityId;

    @NotBlank(message = "Title must not be empty")
    @Column(nullable = false)
    private String title;

    @Column(unique = true)
    /**
     * e.g.) 1.1.1
     */
    private String index;

    @Column(name = "page",nullable = true)
    /**
     * Number of page where the chapter starts
     */
    private Integer page;

    @NotNull
    private Integer progress;

    private String type;

    @NotEmpty
    @Column(nullable = false)
    private String status;

    @CreatedDate
    @Column(name = "created_at")
    private Instant createdAt;

    @LastModifiedDate
    @Column(name = "updated_at")
    private Instant updatedAt;

    // connections



}
