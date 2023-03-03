package com.erinbro.librimem.chapter.dto;

import com.erinbro.librimem.chapter.model.Chapter;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ChaptersRequestDto {
    private List<Chapter> chapters;
}
