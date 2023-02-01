package com.erinbro.librimem.chapter.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Data
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ChapterRequest {

    @NotNull
    private Integer entityId;

    @NotBlank
    private String title;

    private boolean read;
}
