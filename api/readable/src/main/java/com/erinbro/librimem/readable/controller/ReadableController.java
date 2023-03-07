package com.erinbro.librimem.readable.controller;

import com.erinbro.librimem.readable.model.Readable;
import com.erinbro.librimem.readable.service.ReadableService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/readables")
@RequiredArgsConstructor
public class ReadableController {

    private final ReadableService readableService;

    private String getToken() {
        return "";
    }

    @PostMapping()
    public Readable addReadable(@RequestBody Readable readable, @RequestHeader("Authorization") String authHeader) {
        String token = authHeader.substring(7);
        Readable addedReadable = readableService.addReadable(readable, token);
        return addedReadable;
    }

    @GetMapping(path = "{entityId}")
    public Readable getReadable(@RequestHeader("Authorization") String authHeader, @PathVariable int entityId) {
        String token = authHeader.substring(7);
        Readable readable = readableService.getReadable(entityId, token);
        return readable;
    }

    @PutMapping()
    public void updateReadable() {

    }

    @DeleteMapping(path = "{id}")
    public void deleteReadable(@PathVariable int id) {

    }

}
