package com.erinbro.librimem.chapter.repository;


import com.erinbro.librimem.chapter.model.Chapter;
import com.github.javafaker.Faker;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * Provides Mock data with JavaFaker
 */
@RequiredArgsConstructor
public class ChapterFaker {
    private final Faker faker;

    /**
     * Generates any amount of fake chapters
     * @param amount
     */
    public List<Chapter> generateMockChapters(int amount){
        // Create a static array
        List<Chapter> chapters = new ArrayList<Chapter>();

        for (int i = 0; i < amount; i++) {
            Chapter chapter  = Chapter.builder()
                    .id(faker.number().numberBetween(1,100))
                    .userId(faker.number().numberBetween(1,100))
                    .entityId(faker.number().numberBetween(1,100))
                    .title("some title")
                    .index("1.1.1")
                    .page(faker.number().numberBetween(1,100))
                    .progress(faker.number().numberBetween(1,100))
                    .type("CHAPTER")
                    .status("READING")
                    .createdAt("1")
                    .updatedAt("1")
                    .build();
            chapters.add(chapter);
        }

        return chapters;
    }
}
