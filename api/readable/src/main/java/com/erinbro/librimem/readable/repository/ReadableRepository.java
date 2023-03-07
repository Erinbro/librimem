package com.erinbro.librimem.readable.repository;

import com.erinbro.librimem.readable.model.Readable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface ReadableRepository extends JpaRepository<Readable, Integer> {

    @Query("SELECT r FROM Readables r WHERE r.entityId = :entityId")
    public Optional<Readable> findReadableByEntityId(@Param("entityId") String entityId);
}
