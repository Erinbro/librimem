package com.erinbro.librimem.chapter.service;

import com.erinbro.librimem.chapter.dto.ChapterRequest;
import com.erinbro.librimem.chapter.model.Chapter;
import com.erinbro.librimem.chapter.repository.ChapterRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ChapterService {

    private final Logger LOGGER  = LoggerFactory.getLogger(ChapterService.class);
    private final ChapterRepository chapterRepository;


    /**
     * Saves Chapter
     */
    public void saveChapter(ChapterRequest req) {
        Chapter newChapter = Chapter.builder()
                .entityId(req.getEntityId())
                .title(req.getTitle())
                        .build();

        chapterRepository.save(newChapter);
        LOGGER.info("Saved chapter: " + newChapter.getTitle());
    }

    // TODO Add pagination
    /**
     * Returns all the chapters from
     * @return List<Cha
     */
    public List<Chapter> getChapters(){
        return chapterRepository.findAll();
    }

    /**
     * Get a particular chapter
     * @param id
     * @return Optional<Chapter>
     */
    public Optional<Chapter> getChapter(Integer id) {
        return chapterRepository.findById(id);
    }

    /**
     * Updates chapter
     * @param updatedChapter
     * @return Chapter
     */
    public Chapter updateChapter(Chapter updatedChapter) {
        return chapterRepository.save(updatedChapter);
    }

    /**
     * Deletes a chapter by id
     * @param id
     * @return
     */
    public void deleteChapter(Integer id) {
        chapterRepository.deleteById(id);
        // TODO Try to retrieve chapter and see if it is really deleted
        LOGGER.info("Deleted chapter with id: " + id);
    }



}
