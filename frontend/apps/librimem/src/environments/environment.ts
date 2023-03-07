// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment: {
  production: boolean
  bookAPI: string
  chapterAPI: string
  userAPI: string
  flashcardAPI: string;
  noteAPI: string;
  summaryAPI: string;
  wordAPI: string;
  readableAPI: string
} = {
  production: false,
  bookAPI: "http://localhost:8080/api/v1/books",
  chapterAPI: "http://localhost:8081/api/v1/chapters",
  userAPI: "http://localhost:8082/api/v1/users",
  flashcardAPI: "http://localhost:8083/api/v1/flashcards",
  summaryAPI: "http://localhost:8084/api/v1/summaries",
  noteAPI: "http://localhost:8085/api/v1/notes",
  wordAPI: "http://localhost:8086/api/v1/words",
  readableAPI: "http://localhost:8088/api/v1/readables"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
