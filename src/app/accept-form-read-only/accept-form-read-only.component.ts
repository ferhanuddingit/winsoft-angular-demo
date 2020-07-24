import { Component, Input } from '@angular/core';
import { AcceptFormModel } from '../../shared/models/accept-form.model';

@Component({
  selector: 'app-accept-form-read-only',
  templateUrl: './accept-form-read-only.component.html',
})
export class AcceptFormReadOnlyComponent {
  @Input('iAcceptData') acceptData: AcceptFormModel;

  constructor() {}
}
