import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { DataTransferUtilityService } from '../services/data-transfer-utility.service';

@Component({
  selector: 'app-reject-form',
  templateUrl: './reject-form.component.html',
})
export class RejectFormComponent implements OnInit {
  //#region properties
  rejForm: FormGroup;
  //#endregion

  //DI
  constructor(
    private _dialog: MatDialog,
    private _fb: FormBuilder,
    private _dtu: DataTransferUtilityService
  ) {}

  ngOnInit(): void {
    this.createRejFormByFormBuilder();
  }

  //close the modal popup on cancel button clicked
  closeMe(): void {
    this._dialog.closeAll();
  }

  //create reject form using formbuilder (reactive form appraoch)
  createRejFormByFormBuilder(): void {
    this.rejForm = this._fb.group({
      reason: ['Option 1', Validators.required],
      comment: [null, Validators.required],
    });
  }

  onSubmit() {
    //will update reject data subject to propagate updated values
    this._dtu.rejData.next(this.rejForm.value);
    this.rejForm.reset();
    this.closeMe();
  }

  get comment() {
    return this.rejForm.get('comment') as FormControl;
  }
}
