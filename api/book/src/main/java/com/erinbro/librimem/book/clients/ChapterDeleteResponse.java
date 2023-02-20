package com.erinbro.librimem.book.clients;

public class ChapterDeleteResponse {
    private boolean deletedChapters;

    ChapterDeleteResponse(boolean deletedChapters) {
        this.deletedChapters = deletedChapters;
    }
}

