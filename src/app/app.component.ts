import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RejectFormComponent } from './reject-form/reject-form.component';
import { DataTransferUtilityService } from './services/data-transfer-utility.service';
import { RejectFormModel } from 'src/shared/models/reject-form.model';
import { AcceptFormComponent } from './accept-form/accept-form.component';
import { AcceptFormModel } from 'src/shared/models/accept-form.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  //#region "properties"
  title = 'winsoft';
  rejData: RejectFormModel;
  showRejectSection: boolean = false;
  showAcceptSection: boolean = false;
  acceptData: AcceptFormModel;
  //#endregion

  constructor(
    private _dialog: MatDialog,
    private _dtu: DataTransferUtilityService
  ) {
    // fetch rejection form data using Rxjx subject
    this._dtu.rejData.subscribe((data) => {
      this.rejData = data;
      this.showRejectSection = this.rejData.reason !== '';
      this.showAcceptSection = false;
    });

    // fetch accept form data using Rxjx subject
    this._dtu.acceptData.subscribe((data) => {
      this.acceptData = data as AcceptFormModel;
      this.showAcceptSection = this.acceptData.drugs.length !== 0;
      this.showRejectSection = false;
    });
  }

  // show rejection modal popup
  onRejectClicked() {
    const dialogRef = this._dialog.open(RejectFormComponent, {
      width: '400px',
    });
  }

  // show accept modal popup
  onAcceptClicked() {
    const dialogRef = this._dialog.open(AcceptFormComponent, {
      width: '900px',
    });
  }

  ngOnDestroy(): void {
    this.showRejectSection = false;
    this.showAcceptSection = false;
  }
}
