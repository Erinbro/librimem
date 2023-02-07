package com.erinbro.librimem.chapter.converter;

import com.erinbro.librimem.chapter.dto.ChapterRequest;
import com.erinbro.librimem.chapter.model.Chapter;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import static org.assertj.core.api.Assertions.*;

@Slf4j
@SpringBootTest
public class ChapterConverterTest {

    @Autowired
    private ChapterConverter chapterConverter;

    @BeforeEach()
    public void before() {
        log.info("Starting new test");
    }

    @AfterEach()
    public void after() {
     log.info("Finished test");
    }

    @BeforeAll()
    public static void start() {
        log.info("Start Tests");
    }

    @AfterAll()
    public static void end() {
        log.info("Tested all");
    }

    @Test
    public void shouldConvertChapterRequestToChapter() {
        // Given
        ChapterRequest chapterRequest = ChapterRequest.builder()
                .entityId(1)
                .read(false)
                .progress(66)
                .index("1.3")
                .createdAt("2023-02-03T15:10:55.834Z")
                .updatedAt("2023-02-03T15:10:55.834Z")
                .page(33)
                .status("TO_READ")
                .build();

        // When
        Chapter chapter = chapterConverter.convertDtoToChapter(chapterRequest);

        // Then
        assertThat(chapter.getEntityId()).isEqualTo(1);


    }


}

