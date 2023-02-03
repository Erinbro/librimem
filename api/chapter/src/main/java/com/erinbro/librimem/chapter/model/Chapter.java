package com.erinbro.librimem.chapter.model;

import jakarta.annotation.Nonnull;
import jakarta.annotation.Nullable;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "chapter", uniqueConstraints = {
        @UniqueConstraint(name = "index", columnNames= "index")
})
public class Chapter {
    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    private Integer id;

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

    @NotNull(message = "Read property can't be null" )
    @Column()
    private boolean read;

}
