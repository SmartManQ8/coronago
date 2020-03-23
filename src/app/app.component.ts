import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { BootService } from './services/boot.service';
import {CgAdvertisementScannerService} from './services/ble/cg-advertisement-scanner.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private bootService: BootService,
        private cGAdvertisementScannerService: CgAdvertisementScannerService
    ) {
        this.initializeApp();
        this.bootService.initApp();

        cGAdvertisementScannerService.cgAdvertisementReceived$
            .subscribe( (cgAdv) => {

                console.error('KLABBET');

            });

    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
}
