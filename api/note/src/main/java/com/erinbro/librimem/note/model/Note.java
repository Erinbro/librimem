package com.erinbro.librimem.note.model;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import java.util.Date;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity(name = "Note")
@Table(name = "note")
public class Note implements INote{
    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    private Integer id;

    private String type;
    @Column(name = "entity_id", nullable = false)
    private Integer entityId;
    @Column(name = "chapter_id", nullable = false)
    private Integer chapterId;

    private boolean favorite;

    @Column(nullable = false)
    private String title;

    /**
     * The actual note
     */
    @Column(nullable = false)
    private String note;

    @CreatedDate
    @Column(name = "created_at")
    private Date createdAt;

    @LastModifiedDate
    @Column(name = "updated_at")
    private Date updatedAt;
}

