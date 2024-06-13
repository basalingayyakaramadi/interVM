import { Component } from '@angular/core';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.less']
})
export class AppsComponent {

  actions = [
    {
        "name": "Clear Device Passcode",
        "action_id": "1",
        "action_type": "nonCriticalAction"
    },
    {
        "name": "Change Device Passcode",
        "action_id": "2",
        "action_type": "nonCriticalAction"
    },
    {
        "name": "Find Device",
        "action_id": "3",
        "action_type": "nonCriticalAction"
    },
    {
        "name": "Lock Device",
        "action_id": "4",
        "action_type": "nonCriticalAction"
    },
    {
        "name": "Delete Device",
        "action_id": "5",
        "action_type": "criticalAction"
    },
    {
        "name": "Enterprise Wipe",
        "action_id": "6",
        "action_type": "criticalAction"
    },
    {
        "name": "Memory Cleanup",
        "action_id": "7",
        "action_type": "quickAction"
    },
    {
        "name": "Clear DNS cache",
        "action_id": "8",
        "action_type": "quickAction"
    },
    {
        "name": "Clear Edge Browser cache",
        "action_id": "9",
        "action_type": "quickAction"
    }
  ]
}
