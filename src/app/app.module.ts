import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PatientInfoComponent } from './patient-info/patient-info.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { RejectFormComponent } from './reject-form/reject-form.component';
import { DataTransferUtilityService } from './services/data-transfer-utility.service';
import { RejectFormReadOnlyComponent } from './reject-form-read-only/reject-form-read-only.component';
import { AcceptFormComponent } from './accept-form/accept-form.component';
import { AcceptFormReadOnlyComponent } from './accept-form-read-only/accept-form-read-only.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PatientInfoComponent,
    OrderDetailsComponent,
    RejectFormComponent,
    RejectFormReadOnlyComponent,
    AcceptFormComponent,
    AcceptFormReadOnlyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [DataTransferUtilityService],
  bootstrap: [AppComponent],
})
export class AppModule {}
