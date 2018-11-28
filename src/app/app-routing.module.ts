import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootPage } from './pages/root/root.page';
import { HomePage } from './pages/home/home.page';
import { NotFoundPage } from './pages/not-found/not-found.page';
import { FaqPage } from './pages/faq/faq.page';
import { AlbumTelosPage } from './pages/album-telos/album-telos.page';
import { AlbumOpenmicPage } from './pages/album-openmic/album-openmic.page';
import { AlbumsPage } from './pages/albums/albums.page';
import { TokenPage } from './pages/token/token.page';
import { CardsPage } from './pages/cards/cards.page';
import { HowItWorksPage } from './pages/how-it-works/how-it-works.page';

const routes: Routes = [
  { path: '',                     data: { state: "root" }, redirectTo: '/home', pathMatch: 'full' },
  { path: '',                     data: { state: "root" }, component: RootPage,
    children: [
      { path: 'home',             data: { state: "home" }, component: HomePage },
      { path: 'faq',              data: { state: "faq" }, component: FaqPage },
      // { path: 'token',            data: { state: "token" }, component: TokenPage },
      { path: 'how-it-works',     data: { state: "how-it-works" }, component: HowItWorksPage },
      
      { path: 'albums',           data: { state: "albums" }, component: AlbumsPage,
        children: [
          { path: 'telos',        data: { state: "album-telos" }, component: AlbumTelosPage },
          { path: 'openmic',      data: { state: "album-openmic" }, component: AlbumOpenmicPage },
        ]
      }
      
    ]
  },
  { path: '**',                   data: { state: "404" }, component: NotFoundPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
