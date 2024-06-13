import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppsComponent } from './apps/apps.component';
import { KnowledgeBaseComponent } from './knowledge-base/knowledge-base.component';
import { SupportComponent } from './support/support.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path: 'apps',
    component: AppsComponent
  },
  {
    path: 'kb',
    component: KnowledgeBaseComponent
  },
  {
    path: 'support',
    component: SupportComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
