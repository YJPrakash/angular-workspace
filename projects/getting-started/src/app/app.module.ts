import { CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { createCustomElement } from '@angular/elements';

import { MaterialUiModule } from './material-ui/material-ui.module';
import { MatCard, MatCardActions, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialUiModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
  entryComponents: [
    MatCard, MatCardActions, MatCardTitle, MatCardSubtitle,
    MatButton,
    MatIcon
  ]
})
export class AppModule implements DoBootstrap {
  title = "Web components demo"
  constructor(private injector: Injector) {
    const matCard = createCustomElement(MatCard, { injector: this.injector })
    customElements.define('mat-card', matCard);
    const matButton = createCustomElement(MatButton, { injector: this.injector })
    customElements.define('mat-button', matButton);
    const matIcon = createCustomElement(MatIcon, { injector: this.injector })
    customElements.define('mat-icon', matIcon);
    // const matCardActions = createCustomElement(MatCardActions, { injector: this.injector })
    // customElements.define('mat-card-actions', matCardActions);
    // const matCardTitle = createCustomElement(MatCardTitle, { injector: this.injector })
    // customElements.define('mat-card-title', matCardTitle);
    // const matCardSubtitle = createCustomElement(MatCardSubtitle, { injector: this.injector })
    // customElements.define('mat-card-subtitle', matCardSubtitle);

  }
  ngDoBootstrap() {
    console.log("App Module bootstrap done");
  }
}
