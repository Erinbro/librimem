package com.erinbro.librimem.chapter.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

/**
 * Dto for chapter
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ChapterRequest {


    private Integer entityId;

    @NotNull
    private Integer userId;

    @NotBlank(message = "Title must not be empty")
    private String title;

    /**
     * e.g.) 1.1.1
     */
    private String index;

    /**
     * Number of page where the chapter starts
     */
    private Integer page;

    @NotNull
    private Integer progress;

    @NotEmpty
    private String status;

    private String type;

    private Instant createdAt;

    private Instant updatedAt;
}
