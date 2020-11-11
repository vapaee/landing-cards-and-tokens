import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { LocalStringsService } from 'src/app/services/local-strings.service';

@Component({
    selector: 'worker-proposal-page',
    templateUrl: './worker-proposal.page.html',
    styleUrls: ['./worker-proposal.page.scss']
})
export class WorkerProposalPage implements OnInit {

    constructor(
        public app: AppService,
        public local: LocalStringsService
    ) {
    }

    ngOnInit() {
    }
}
