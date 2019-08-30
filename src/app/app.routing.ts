import { PrivacyComponent } from './footer/privacy/privacy.component';
import { CookiePolicyComponent } from './footer/cookie-policy/cookie-policy.component';
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { PresentationComponent } from './presentation/presentation.component';
import { ComponentsComponent } from './components/components.component';
import { SectionsComponent } from './sections/sections.component';
import { AboutusComponent } from './examples/aboutus/aboutus.component';
import { BlogpostComponent } from './examples/blogpost/blogpost.component';
import { BlogpostsComponent } from './examples/blogposts/blogposts.component';
import { ContactusComponent } from './examples/contactus/contactus.component';
import { EcommerceComponent } from './examples/ecommerce/ecommerce.component';
import { LandingComponent } from './examples/landing/landing.component';
import { LoginComponent } from './examples/login/login.component';
import { ProductpageComponent } from './examples/productpage/productpage.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { RegisterComponent } from './examples/register/register.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { PricingComponent } from './examples/pricing/pricing.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AboutComponent } from './footer/about/about.component';
import { ContactComponent } from './footer/contact/contact.component';


const routes: Routes = [
    { path: '', component: SignupComponent },
    { path: 'components', component: ComponentsComponent },
    { path: 'cookie', component: CookiePolicyComponent },
    { path: 'privacy', component: PrivacyComponent },
    { path: 'about-us', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
