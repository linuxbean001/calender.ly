import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { FooterModule } from './footer/footer.module';
import { PagesModule } from './pages/pages.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { SectionsModule } from './sections/sections.module';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';

import { AppComponent } from './app.component';
import { PresentationComponent } from './presentation/presentation.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

import { PresentationModule } from './presentation/presentation.module';
import {NgcCookieConsentModule} from 'ngx-cookieconsent';
import { NgxCoolDialogsModule } from 'ngx-cool-dialogs';
import { CookieLawModule } from 'angular2-cookie-law';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent
    ],
    imports:[
 CommonModule,
NgtUniversalModule,
 
        BrowserAnimationsModule,
        NgbModule.forRoot(),
        FormsModule,
        RouterModule,
        FooterModule,
        AppRoutingModule,
        PresentationModule,
        SectionsModule,
        ComponentsModule,
        ExamplesModule,
        PagesModule,
        NgxCoolDialogsModule.forRoot(),
        CookieLawModule
    ],
    providers: [],
})
export class AppModule { }
