package com.erinbro.librimem.chapter.converter;

import com.erinbro.librimem.chapter.dto.ChapterRequest;
import com.erinbro.librimem.chapter.model.Chapter;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.stereotype.Component;

@Component
public class ChapterConverter {


    /**
     * Converts
     * @param chapterRequest
     * @return
     */
    public Chapter convertDtoToChapter(ChapterRequest chapterRequest) {
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        Chapter chapter = modelMapper.map(chapterRequest, Chapter.class);
        return chapter;
    }
}
