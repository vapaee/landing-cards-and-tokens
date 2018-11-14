import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { LocalStringsService } from 'src/app/services/local-strings.service';

@Component({
    selector: 'albums-page',
    templateUrl: './albums.page.html',
    styleUrls: ['./albums.page.scss']
})
export class AlbumsPage implements OnInit {

    constructor(
        public app: AppService,
        public local: LocalStringsService) {
    }

    ngOnInit() {
    }
}
