package com.erinbro.librimem.clients.feign.chapter;


import com.erinbro.librimem.clients.webclient.chapter.ChapterDeleteResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(value = "chapter"
        , url = "${clients.chapter.url}")
public interface ChapterClient {

    @DeleteMapping("/book/{bookId}")
    ChapterDeleteResponse deleteAllChaptersFromBook(@PathVariable("bookId") int bookId);

}
