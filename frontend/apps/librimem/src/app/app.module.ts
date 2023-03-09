import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BooksPageComponent } from './pages/books/books-page.component';
import { StoreModule, Store } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BookListComponent } from './pages/books/components/BooksList/book-list.component';
import { reducers } from './state/reducers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookCardComponent } from './pages/books/components/BookCard/book-card.component';
import { BookModalComponent } from './pages/books/components/BookModal/book-modal.component';
// ANCHOR Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './state/book/book.effect';
import { ReaderPageComponent } from './pages/reader/reader-page.component';
import { AppRoutingModule } from './app-routing.module';
import { QuillModule } from 'ngx-quill';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { SidenavService } from './shared/sidenav/sidenav.service';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { BookPageComponent } from './pages/book/book-page.component';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ChaptersPageComponent } from './pages/chapters/chapters-page.component';
import { NotesPageComponent } from './pages/notes/notes-page.component';
import { NotePageComponent } from './pages/note/note-page.component';
import { WordsPageComponent } from './pages/words/words-page.component';
import { SummariesPageComponent } from './pages/summaries/summaries-page.component';
import { WordPageComponent } from './pages/word/word-page.component';
import { ChapterPageComponent } from './pages/chapter/chapter-page.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DrawerComponent } from './shared/drawer/drawer.component';
import { DrawerIconComponent } from './shared/drawer/components/drawer-icon/drawer-icon.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ChaptersListComponent } from './pages/chapters/components/chapters-list/chapters-list.component';
import { ChapterCardComponent } from './pages/chapters/components/chapter-card/chapter-card.component';
import { DeleteDialogComponent } from './shared/dialog/delete-dialog/delete-dialog.component';
import { ErrorDialogComponent } from './shared/dialog/error-dialog/error-dialog.component';
import { InfoDialogComponent } from './shared/dialog/info-dialog/info-dialog.component';
import { FlashcardsPageComponent } from './pages/flashcards/flashcards-page.component';
import { FlashcardDialogComponent } from './pages/flashcards/components/flashcard-dialog/flashcard-dialog.component';
import { FlashcardsTableComponent } from './pages/flashcards/components/flashcards-table/flashcards-table.component';
import { FlashcardCardComponent } from './pages/flashcards/components/flashcard-card/flashcard-card.component';
import { ChapterDenominatorComponent } from './shared/chapter-denominator/chapter-denominator.component';
import { MatExpansionModule } from '@angular/material/expansion';
import {
  NavigationActionTiming,
  StoreRouterConnectingModule,
} from '@ngrx/router-store';
import { RouterSerializer } from './state/router/route-serializer';
import { ChapterDialogComponent } from './pages/chapters/components/chapter-dialog/chapter-dialog.component';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { InfoButtonComponent } from './shared/buttons/info-button/info-button.component';
import { SecondaryButtonComponent } from './shared/buttons/secondary-button/secondary-button.component';
import { PrimaryButtonComponent } from './shared/buttons/primary-button/primary-button.component';
import { DeleteButtonComponent } from './shared/buttons/delete-button/delete-button.component';
import { RegisterPageComponent } from './pages/auth/components/registration/register-page.component';
import { LoginPageComponent } from './pages/auth/components/login/login-page.component';
import { AuthPageComponent } from './pages/auth/auth-page.component';
import { BaseButtonComponent } from './shared/buttons/base-button.component';
import { MatButtonModule } from '@angular/material/button';
import { CloseButtonComponent } from './shared/buttons/close-button/close-button.component';
import { BaseDialogComponent } from './shared/dialog/base-dialog.component';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthService } from './services/auth/auth.service';
import { AddButtonComponent } from './shared/buttons/add-button/add-button.component';
import { ChapterPresentationComponent } from './pages/chapter/components/chapter-presentation/chapter-presentation.component';
import { FavoriteButtonComponent } from './shared/buttons/favorite-button/favorite-button.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MatTabsModule } from '@angular/material/tabs';
import { BookSearchCardComponent } from './pages/books/components/BookModal/components/book-search-card/book-search-card.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BookPresentationComponent } from './pages/book/components/BookPresentation/book-presentation.component';
import { BookResourcesComponent } from './pages/book/components/BookResources/book-resources.component';
import { MatSelectModule } from '@angular/material/select';
import { ChapterStorageApi } from './storage/features/chapter.storage';
import { ChapterAddedSnackBar } from './pages/chapters/components/chapter-dialog/components/chapter-added-snackbar';
import { FlashcardAddedSnackBar } from './pages/flashcards/components/flashcard-dialog/components/flashcard-added-snackbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSliderModule } from '@angular/material/slider';
import { ChapterEffects } from './state/chapter/chapter.effects';
import { environment } from '../environments/environment';
import { OauthComponent } from './pages/auth/components/oauth/oauth.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AddHeaderInterceptor } from './services/interceptor/header-interceptor';
import { ArticlesPageComponent } from './pages/articles/articles-page.component';
import { ArticlesLaneComponent } from './pages/articles/articles-lane/articles-lane.component';
import { ArticleCardComponent } from './pages/articles/article-card/article-card.component';
import { ArticleDialogComponent } from './pages/articles/article-dialog/article-dialog.component';
import { BookStorageApi } from './storage/features/book.storage';
import { ReaderContainerComponent } from './pages/reader/components/reader-container/reader-container.component';
import { ReadableInputComponent } from './shared/readable-input/readable-input.component';
import { CoverStorageService } from './storage/features/cover.storage.service';
import { FileUploadModule } from 'primeng/fileupload';
import { ReadableClientService } from './services/http/readable.client.service';
import { ReadableEffects } from './state/readable/readable.effect';
import { DangerButtonComponent } from './shared/buttons/danger-button/danger-button.component';

const primengModules = [InputTextModule, ButtonModule, RippleModule];
/**
 * The modules from material UI
 */
const materialModules = [];

@NgModule({
  declarations: [
    AppComponent,
    BooksPageComponent,
    BookListComponent,
    BookCardComponent,
    BookModalComponent,
    ReaderPageComponent,
    SidenavComponent,
    ToolbarComponent,
    BreadcrumbComponent,
    NotesPageComponent,
    NotePageComponent,
    WordsPageComponent,
    SummariesPageComponent,
    WordPageComponent,
    ChaptersPageComponent,
    ChapterPageComponent,
    BookPageComponent,
    DrawerComponent,
    DrawerIconComponent,
    ChaptersPageComponent,
    ChaptersListComponent,
    ChapterCardComponent,
    DeleteDialogComponent,
    ErrorDialogComponent,
    InfoDialogComponent,
    FlashcardsPageComponent,
    FlashcardDialogComponent,
    FlashcardsTableComponent,
    FlashcardCardComponent,
    ChapterDenominatorComponent,
    ChapterDialogComponent,
    InfoButtonComponent,
    PrimaryButtonComponent,
    SecondaryButtonComponent,
    DeleteButtonComponent,
    RegisterPageComponent,
    LoginPageComponent,
    AuthPageComponent,
    CloseButtonComponent,
    AddButtonComponent,
    ChapterPresentationComponent,
    FavoriteButtonComponent,
    BookSearchCardComponent,
    BookPresentationComponent,
    BookResourcesComponent,
    ChapterAddedSnackBar,
    FlashcardAddedSnackBar,
    OauthComponent,
    ArticlesPageComponent,
    ArticlesLaneComponent,
    ArticleCardComponent,
    ArticleDialogComponent,
    ReaderContainerComponent,
    ReadableInputComponent,
    DangerButtonComponent,
  ],
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
    MatSidenavModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatTooltipModule,
    MatSlideToggleModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    // NOTE Store
    EffectsModule.forRoot([BookEffects, ChapterEffects, ReadableEffects]),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot({
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],
          ['blockquote'],
          [{ header: [1, 2, 3, 4] }],
          [{ color: [] }, { background: [] }],
          [{ font: [] }],
          [{ align: [] }],
          ['clean'],
        ],
      },
    }),
    DragDropModule,
    StoreRouterConnectingModule.forRoot({
      navigationActionTiming: NavigationActionTiming.PostActivation,
      serializer: RouterSerializer,
    }),
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    JwtModule.forRoot({
      // config: {
      //   tokenGetter: () => localStorage.getItem('token'),
      // },
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    MatTabsModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatSelectModule,
    MatProgressBarModule,
    MatSliderModule,
    [...primengModules],
    FileUploadModule,
  ],
  providers: [
    SidenavService,
    { provide: MAT_DIALOG_DATA, useValue: {} },
    ChapterStorageApi,
    BookStorageApi,
    CoverStorageService,
    { provide: HTTP_INTERCEPTORS, useClass: AddHeaderInterceptor, multi: true },
    ReadableClientService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
