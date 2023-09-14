// settings.component.ts

import { Component } from '@angular/core';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
    selectedTab: string = 'privacy';
    privacySetting: string = 'Private'; // Example privacy setting value
    selectTab(tabName: string) {
      console.log("=========selectedTab",tabName)
        this.selectedTab = tabName;
    }
}
