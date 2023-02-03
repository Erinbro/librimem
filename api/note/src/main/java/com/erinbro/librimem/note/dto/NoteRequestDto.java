package com.erinbro.librimem.note.dto;

import lombok.*;

import java.util.Date;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class NoteRequestDto {
    private String type;
    private Integer entityId;
    private Integer chapterId;
    private boolean favorite;
    private String title;
    private String note;
    private Date createdAt;
    private Date updatedAt;
}
