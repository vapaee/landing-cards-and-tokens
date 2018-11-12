import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { AppService } from "../../services/app.service";
import { LocalStringsService } from 'src/app/services/local-strings.service';

declare var $:any;

@Component({
    selector: 'root-page',
    templateUrl: './root.page.html',
    styleUrls: ['./root.page.scss']
})
export class RootPage implements OnInit {

    constructor(
        public app: AppService,
        private local: LocalStringsService,
        private elRef: ElementRef) {
    }
    
    ngOnInit() {
    }

    collapseMenu() {
        var target = this.elRef.nativeElement.querySelector("#toggle-btn");
        var navbar = this.elRef.nativeElement.querySelector("#navbar");
        if (target && $(navbar).hasClass("show")) {
            $(target).click();
        }
    }
}

@Component({
    selector: 'page-container',
    template: '<router-outlet></router-outlet>'
})
export class PageContainer {
}
