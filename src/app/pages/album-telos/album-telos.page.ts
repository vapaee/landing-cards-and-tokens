import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
    selector: 'album-telos-page',
    templateUrl: './album-telos.page.html',
    styleUrls: ['./album-telos.page.scss']
})
export class AlbumTelosPage implements OnInit {

    constructor(private app: AppService) {
    }

    ngOnInit() {
    }
}
