import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { LocalStringsService } from 'src/app/services/local-strings.service';

@Component({
    selector: 'redirect-page',
    templateUrl: './redirect.page.html',
    styleUrls: ['./redirect.page.scss']
})
export class RedirectPage implements OnInit {

    constructor(
        public app: AppService,
        public local: LocalStringsService) {
    }

    ngOnInit() {
        var url = window.location.protocol + "//app.cardsandtokens.com" + window.location.pathname;
        console.log("redirect ----> ", url);
        setTimeout(_ => {
            window.location.href = url;
        }, 0);
    }
}
