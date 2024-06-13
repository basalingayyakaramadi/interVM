import { Component } from '@angular/core';
import { FeatureFlagService } from '../feature-flag.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.less']
})
export class SettingsComponent {
  constructor(private featureFlagService: FeatureFlagService){}
  role = 'basicAdmin'
}
