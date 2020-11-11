import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { LocalStringsService } from 'src/app/services/local-strings.service';

@Component({
    selector: 'token-page',
    templateUrl: './token.page.html',
    styleUrls: ['./token.page.scss']
})
export class TokenPage implements OnInit {

    constructor(
        public app: AppService,
        public local: LocalStringsService
    ) {
    }

    ngOnInit() {
    }
}
