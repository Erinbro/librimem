package com.erinbro.librimem.chapter.repository;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import com.erinbro.librimem.chapter.model.Chapter;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import static org.junit.jupiter.api.Assertions.*;
import static org.assertj.core.api.Assertions.assertThat;

import java.util.Optional;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class ChapterRepositoryTest {
    @Autowired
    private ChapterRepository chapterRepository;
    @Autowired
    private ChapterFaker chapterFaker;

     @Test
    public void itShouldSaveChapter() {
         // Given
         Chapter chapter = Chapter.builder()
                 .index("1.1.3")
                 .title("title")
                 .type("CHAPTER")
                 .entityId(1)
                 .progress(3)
                 .status("TO_READ")
                 .build();


         // When
         chapterRepository.save(chapter);

         // Then
         Optional<Chapter> addedChapter =  chapterRepository.findById(1);
         assertTrue(addedChapter.isPresent());
    }

    @Test
    public void itShouldUpdateChapter() {
         // Given
         Chapter chapter = Chapter.builder()
                 .id(1)
                 .userId(1)
                 .index("1.1.3")
                 .title("title")
                 .type("CHAPTER")
                 .entityId(1)
                 .progress(30)
                 .status("TO_READ")
                 .build();
        chapterRepository.save(chapter);

        Optional<Chapter> chapterBefore = chapterRepository.findById(1);

        Chapter updatedChapter = Chapter.builder()
                .id(1)
                .userId(1)
                .index("1.1.3")
                .title("titlee")
                .type("CHAPTER")
                .entityId(1)
                .progress(30)
                .status("TO_READ")
                .build();
        Chapter newChapter = chapterRepository.save(updatedChapter);

        // When
        assertThat(updatedChapter.getTitle()).isEqualTo(newChapter.getTitle());
    }

    @Test
    public void itShouldPassAllChaptersOfABook()  {
         // given
        List<Chapter> chapters = chapterFaker.generateMockChapters(1000);

        chapterRepository.saveAll(chapters);

        // when
        List<Chapter> requestedChapters = chapterRepository.findChaptersByEntityId(10);

        // then
        assertThat(requestedChapters).allMatch(x -> x.getEntityId().equals(10));

    }

    @Test
    public void itShouldDeleteAChapter() {

    }

    @Test
    public void itShouldDeleteAllChaptersOfABook() {

    }
}
