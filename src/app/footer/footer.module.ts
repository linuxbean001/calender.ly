import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookiePolicyComponent } from './cookie-policy/cookie-policy.component';
import { FooterComponent } from './footer/footer.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [CookiePolicyComponent, FooterComponent, PrivacyComponent, AboutComponent, ContactComponent],
  exports: [FooterComponent, PrivacyComponent]
})
export class FooterModule { }
