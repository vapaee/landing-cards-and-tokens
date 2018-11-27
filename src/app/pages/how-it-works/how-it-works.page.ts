import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { LocalStringsService } from 'src/app/services/local-strings.service';

@Component({
    selector: 'how-it-works-page',
    templateUrl: './how-it-works.page.html',
    styleUrls: ['./how-it-works.page.scss']
})
export class HowItWorksPage implements OnInit {

    constructor(
        public app: AppService,
        public local: LocalStringsService) {
    }

    ngOnInit() {
    }
}
