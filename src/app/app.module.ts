import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginDialogComponent } from './home/login-dialog/login-dialog.component';
import { RegistrationDialogComponent } from './home/registration-dialog/registration-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { SchedulingDialogComponent } from './scheduling-dialog/scheduling-dialog.component';
import { AdminComponent } from './admin/admin.component';
import { AvailableServiceDialogComponent } from './admin/available-service-dialog/available-service-dialog.component';
import { LoginComponent } from './login/login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SchedulingService } from './scheduling.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientPanelComponent } from './client-panel/client-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginDialogComponent,
    RegistrationDialogComponent,
    SchedulingDialogComponent,
    AdminComponent,
    AvailableServiceDialogComponent,
    LoginComponent,
    ClientPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [HttpClient,SchedulingService],
  entryComponents:[LoginDialogComponent,RegistrationDialogComponent,SchedulingDialogComponent,AvailableServiceDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
