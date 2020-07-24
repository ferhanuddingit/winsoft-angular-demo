import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { DataTransferUtilityService } from '../services/data-transfer-utility.service';

@Component({
  selector: 'app-accept-form',
  templateUrl: './accept-form.component.html',
})
export class AcceptFormComponent implements OnInit {
  //#region properties
  acceptForm: FormGroup;
  drugs: FormArray;
  //#endregion

  // DI
  constructor(
    private _dialog: MatDialog,
    private _fb: FormBuilder,
    private _dtu: DataTransferUtilityService
  ) {}

  ngOnInit(): void {
    this.createDrugFormByFormBuilder();
  }

  //close the modal popup on cancel button clicked
  closeMe() {
    this._dialog.closeAll();
  }

  getControls() {
    return (this.acceptForm.get('drugs') as FormArray).controls;
  }

  onAddDrug() {
    this.drugs = this.acceptForm.get('drugs') as FormArray;
    this.drugs.push(this.createDrugInventory());
  }

  //create accept form using formbuilder (reactive form appraoch)
  createDrugFormByFormBuilder(): void {
    this.acceptForm = this._fb.group({
      drugs: this._fb.array([]),
      subtotal: { value: 0.0, disabled: false },
      discount: { value: 10, disabled: false },
      deliveryfee: { value: 10, disabled: false },
      loyalitydiscount: { value: 10, disabled: false },
      insuredamount: { value: 10, disabled: false },
      totaluserpayable: { value: 0.0, disabled: false },
    });
  }

  //create dynamic row for adding multiple drugs
  createDrugInventory(): FormGroup {
    return this._fb.group({
      drugname: ['', Validators.required],
      quantity: [0, Validators.required],
      status: 'Accept',
      price: [0, Validators.required],
      total: { value: 0, disabled: true },
    });
  }

  //removing of particular row
  onRemoveDrug(i: number) {
    this.drugs.removeAt(i);
  }

  onSubmit() {
    //will update accept data subject to propagate updated values
    this._dtu.acceptData.next(this.acceptForm.value);
    this.acceptForm.reset();
    this.closeMe();
  }

  //on each quantity and price change, that code will execute to update totals
  onQuantityAndPriceChanges(i: number) {
    let grp = this.drugs.at(i);
    grp.patchValue({ total: grp.value.quantity * grp.value.price });
    this.subTotal();
    this.totalUserPayable();
  }

  subTotal() {
    let sum = 0;
    this.getControls().forEach((res) => {
      console.log(res);
      sum += +res.value.quantity * res.value.price;
    });

    this.acceptForm.patchValue({ subtotal: sum });
  }

  totalUserPayable(): void {
    let grandtotal =
      +this.acceptForm.value.subtotal +
      +this.acceptForm.value.deliveryfee -
      +this.acceptForm.value.discount -
      +this.acceptForm.value.loyalitydiscount -
      +this.acceptForm.value.insuredamount;

    this.acceptForm.patchValue({ totaluserpayable: grandtotal });
  }
}
