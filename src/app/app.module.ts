import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PanelProjectComponent } from './panels/panel-project/panel-project.component';
import { DiagramTableComponent } from './diagram-table/diagram-table.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelProjectComponent,
    DiagramTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
