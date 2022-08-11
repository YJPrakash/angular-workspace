import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

import { MatCard } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatDivider } from '@angular/material/divider';
import { MatCardActionsComponent } from './mat-card-actions/mat-card-actions.component';
import { MatCardHeaderComponent } from './mat-card-header/mat-card-header.component';
import { MatCardTitleComponent } from './mat-card-title/mat-card-title.component';
import { MatCardSubtitleComponent } from './mat-card-subtitle/mat-card-subtitle.component';


const matUI = [
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatDividerModule
]

@NgModule({
  declarations: [
    MatCardActionsComponent,
    MatCardTitleComponent,
    MatCardSubtitleComponent,
    MatCardHeaderComponent
  ],
  imports: [
    CommonModule,
    matUI
  ],
  exports: [
    matUI
  ],
  entryComponents: [
    MatDivider,
    MatCard,
    MatButton,
    MatIcon
  ]
})
export class MaterialUiModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const matCard = createCustomElement(MatCard, { injector: this.injector })
    customElements.define('mat-card', matCard);
    const matButton = createCustomElement(MatButton, { injector: this.injector })
    customElements.define('mat-button', matButton);
    const matIcon = createCustomElement(MatIcon, { injector: this.injector })
    customElements.define('mat-icon', matIcon);
    const matDivider = createCustomElement(MatDivider, { injector: this.injector })
    customElements.define('mat-divider', matDivider);
    const matCardActions = createCustomElement(MatCardActionsComponent, { injector: this.injector })
    customElements.define('app-mat-card-actions', matCardActions);
    const matCardTitle = createCustomElement(MatCardTitleComponent, { injector: this.injector })
    customElements.define('app-mat-card-title', matCardTitle);
    const matCardSubtitle = createCustomElement(MatCardSubtitleComponent, { injector: this.injector })
    customElements.define('app-mat-card-subtitle', matCardSubtitle);
    const matCardHeader = createCustomElement(MatCardHeaderComponent, { injector: this.injector })
    customElements.define('app-mat-card-header', matCardHeader);
  }
  ngDoBootstrap(appRef: ApplicationRef): void {
    console.log(appRef);
  }
}
