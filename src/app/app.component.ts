import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
    constructor(
        // public app: AppService, 
    ) {
    }
    ngOnInit() {
        // this.app.onWindowsResize();
    }

    @HostListener('window:resize')
    onWindowsResize() {
        // this.app.onWindowsResize();
    } 
}
