import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InfosPComponent } from './infos-p/infos-p.component';
import { LinksComponent } from './links/links.component';
import { ElementComponent } from './element/element.component';
import { CvComponent } from './cv/cv.component';

@NgModule({
  declarations: [
    AppComponent,
    InfosPComponent,
    LinksComponent,
    ElementComponent,
    CvComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
