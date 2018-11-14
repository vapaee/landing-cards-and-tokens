import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
    selector: 'album-openmic-page',
    templateUrl: './album-openmic.page.html',
    styleUrls: ['./album-openmic.page.scss']
})
export class AlbumOpenmicPage implements OnInit {

    constructor(public app: AppService) {
    }

    ngOnInit() {
    }
}
