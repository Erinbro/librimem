package com.erinbro.librimem.chapter.service;

import com.erinbro.librimem.chapter.clients.UserClient;
import com.erinbro.librimem.chapter.converter.ChapterConverter;
import com.erinbro.librimem.chapter.dto.AuthorizationRequestDto;
import com.erinbro.librimem.chapter.dto.AuthorizationResponseDto;
import com.erinbro.librimem.chapter.dto.ChapterRequest;
import com.erinbro.librimem.chapter.dto.ChaptersRequestDto;
import com.erinbro.librimem.chapter.exception.NotFoundException;
import com.erinbro.librimem.chapter.model.Chapter;
import com.erinbro.librimem.chapter.repository.ChapterRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class ChapterService {

    private final ChapterRepository chapterRepository;
    private final ChapterConverter chapterConverter;
    private final UserClient userClient;

    /**
     * Saves Chapter
     */
    public Chapter saveChapter(ChapterRequest req) {
        Chapter newChapter = chapterConverter.convertDtoToChapter(req);
        Chapter addedChapter = chapterRepository.save(newChapter);
        log.info("Saved chapter: " + newChapter.getTitle());
        return addedChapter;
    }

    public List<Chapter> saveChapters(String token, ChaptersRequestDto chaptersRequestDto) {
        AuthorizationRequestDto req = new AuthorizationRequestDto(token);
        AuthorizationResponseDto res = userClient.authorizeRequest(req);
        String username = res.getUsername();
        var newChapters = chaptersRequestDto.getChapters();
        var insertedChapters = chapterRepository.saveAll(newChapters);
        log.info("Inserted multiple chapters");
        return insertedChapters;
    }

    // TODO Add pagination

    /**
     * Returns all the chapters from
     *
     * @return List<Cha
     */
    public List<Chapter> getChaptersFromBook(Integer bookId) {

        List<Chapter> chapters = chapterRepository.findChaptersByEntityId(bookId);
        log.info("Retrieved chapters from book with id {}", bookId);

        return chapters;
    }

    /**
     * Get a particular chapter
     *
     * @param chapterId
     * @return Optional<Chapter>
     */
    public Chapter getChapter(Integer chapterId) throws NotFoundException {
        Optional<Chapter> chapter = chapterRepository.findById(chapterId);

        if (chapter.isPresent()) {
            return chapter.get();
        } else {
            throw new NotFoundException("Chapter with id " + chapterId + " was nout found");
        }
    }

    /**
     * Updates chapter
     *
     * @param updatedChapter
     * @return Chapter
     */
    public Chapter updateChapter(Chapter updatedChapter) {
        return chapterRepository.save(updatedChapter);
    }

    /**
     * Deletes a chapter by id
     *
     * @param id
     * @return
     */
    public Chapter deleteChapter(Integer id) throws NotFoundException {
        Optional<Chapter> deletedChapter = chapterRepository.findById(id);
        chapterRepository.deleteById(id);
        log.info("Deleted chapter with id: " + id);

        if (deletedChapter.isPresent()) {
            return deletedChapter.get();
        } else {
            throw new NotFoundException("Chapter with id " + id + " not found");
        }
    }


    public List<Chapter> deleteAllChaptersFromBook(int bookId) {
        List<Chapter> deletedChapters = chapterRepository.findChaptersByEntityId(bookId);
        chapterRepository.deleteAllByEntityId(bookId);
        log.info("Deleted all chapters of entityId {}", bookId);

        return deletedChapters;
    }


}
