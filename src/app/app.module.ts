import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { DataService } from './data.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InfoComponent } from './info/info.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    InfoComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "signup", component: SignUpComponent },

      { path: "main", component: InfoComponent },
      { path: " ", redirectTo: "signup", pathMatch: "full" },
      { path: "**", redirectTo: "signup", pathMatch: "full" },
    ]),
    HttpClientModule,

    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
