import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { LocalStringsService } from 'src/app/services/local-strings.service';

@Component({
    selector: 'faq-page',
    templateUrl: './faq.page.html',
    styleUrls: ['./faq.page.scss']
})
export class FaqPage implements OnInit {

    constructor(
        public app: AppService,
        public local: LocalStringsService) {
    }

    ngOnInit() {
    }
}
