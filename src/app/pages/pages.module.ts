import { FooterModule } from './../footer/footer.module';
import { SignupService } from './signup.service';
import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FooterModule,
    HttpClientJsonpModule
  ],
  providers: [SignupService],
  declarations: [SignupComponent]
})
export class PagesModule { }
