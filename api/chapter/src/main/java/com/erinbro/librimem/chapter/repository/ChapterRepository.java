package com.erinbro.librimem.chapter.repository;

import com.erinbro.librimem.chapter.model.Chapter;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChapterRepository  extends JpaRepository<Chapter, Integer> {
}
