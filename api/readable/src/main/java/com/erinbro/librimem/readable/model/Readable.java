package com.erinbro.librimem.readable.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "readable")
@Entity(name = "Readables")
public class Readable {
    @Id
    @GeneratedValue
    @Column(name = "id")
    private Integer id;

    @Column(nullable = false, name = "user_id")
    private Integer userId;

    /**
     * The name of the entity (book, article,...) it belongs to
     */
    @Column(name = "entity_id")
    private Integer entityId;

    /**
     * PDF, EPUB
     */
    private String type;

    /**
     * Decides if the readable is publicly accessible
     * like the gutenberg books.
     */
    @Column(name = "is_public")
    private Boolean isPublic;

    /**
     * The base64 encoded value
     */
    @Column(nullable = false, columnDefinition = "TEXT")
    private String data;

}
