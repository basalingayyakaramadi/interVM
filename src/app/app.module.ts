import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppsComponent } from './apps/apps.component';
import { KnowledgeBaseComponent } from './knowledge-base/knowledge-base.component';
import { SupportComponent } from './support/support.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    AppsComponent,
    KnowledgeBaseComponent,
    SupportComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
