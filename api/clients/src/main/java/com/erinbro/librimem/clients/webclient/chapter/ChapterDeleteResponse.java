package com.erinbro.librimem.clients.webclient.chapter;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/***
 * Response when we delete
 * cascade the chapters of a book
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ChapterDeleteResponse {
    public boolean deletedAllChapters;
}
