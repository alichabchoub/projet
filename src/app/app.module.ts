
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';

import {ToastModule} from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import {RouterModule} from '@angular/router';
import { AngularFireModule} from '@angular/fire/compat'
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { DeviceComponent } from './device/device.component';
import { AdddeviceComponent } from './add-device/add-device.component';
import { UpdateDeviceComponent } from './update-device/update-device.component';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AddUserComponent,
    ConfirmationDialogComponent,
    PeopleListComponent,
    ResetpasswordComponent,
    UpdateUserComponent,
    DeviceComponent,
    AdddeviceComponent,
    UpdateDeviceComponent,

    
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule ,
    ToastModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AppRoutingModule,
    ButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



















