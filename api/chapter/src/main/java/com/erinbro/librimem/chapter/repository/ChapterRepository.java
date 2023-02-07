package com.erinbro.librimem.chapter.repository;

import com.erinbro.librimem.chapter.model.Chapter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ChapterRepository  extends JpaRepository<Chapter, Integer> {
    @Query(nativeQuery = true, value = "SELECT * from chapter WHERE book_id = ")
    public List<Chapter> findChaptersByEntityId(@Param("bookId") Integer bookId);

    public List<Chapter> deleteAllByEntityId(@Param("bookId") Integer bookId);
}
