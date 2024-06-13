import { Component } from '@angular/core';
import { FeatureFlagService } from '../feature-flag.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.less']
})
export class SupportComponent {
  constructor(private featureFlagService: FeatureFlagService){}
 role = 'basicAdmin'
}
