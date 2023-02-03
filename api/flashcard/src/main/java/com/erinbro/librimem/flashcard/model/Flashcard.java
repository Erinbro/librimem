package com.erinbro.librimem.flashcard.model;

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
@Table(name = "flashcard", uniqueConstraints = {
        @UniqueConstraint(name = "id", columnNames = "id")
})
public class Flashcard implements IFlashcard {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Integer id;

    @NotBlank()
    private String type;

    @Column(name = "entity_id")
    private Integer entityId;

    @Column(name = "chapter_id")
    private Integer chapterId;

    /**
     * Decides if it is a favorite
     */
    private boolean favorite;

    @NotBlank(message = "Question must not be empty")
    private String question;

    @NotBlank(message = "Answer must not be empty")
    private String answer;

    @CreatedDate
    @Column(name = "created_at")
    private Date created;

    @LastModifiedDate
    @Column(name = "updated_at")
    private Date updatedAt;
}
