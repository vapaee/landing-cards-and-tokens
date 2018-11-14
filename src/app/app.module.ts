import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HomePage } from './pages/home/home.page';
import { NotFoundPage } from './pages/not-found/not-found.page';
import { RootPage, PageContainer } from './pages/root/root.page';
import { FaqPage } from './pages/faq/faq.page';
import { AlbumTelosPage } from './pages/album-telos/album-telos.page';
import { AlbumOpenmicPage } from './pages/album-openmic/album-openmic.page';
import { TokenPage } from './pages/token/token.page';

import { AppService, LoadingOverall } from './services/app.service';
import { AlbumsPage } from './pages/albums/albums.page';
import { AnalyticsService } from './services/analytics.service';
import { DomService } from './services/dom.service';
import { DataService } from './services/data.service';
import { LocalStringsService } from './services/local-strings.service';
import { HttpClientModule } from '@angular/common/http';
import { CardsPage } from './pages/cards/cards.page';
import { SocialLoginModule } from './modules/social-login';


@NgModule({
    declarations: [
        AppComponent,
        HomePage,
        NotFoundPage,
        FaqPage,
        AlbumsPage,
        AlbumTelosPage,
        AlbumOpenmicPage,
        TokenPage,
        RootPage,
        PageContainer,
        CardsPage,
        LoadingOverall
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        SocialLoginModule
    ],
    providers: [
        AppService,
        AnalyticsService,
        DomService,
        DataService,
        LocalStringsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
