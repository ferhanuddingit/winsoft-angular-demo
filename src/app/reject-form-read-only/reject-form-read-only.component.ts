import { Component, Input } from '@angular/core';
import { RejectFormModel } from 'src/shared/models/reject-form.model';

@Component({
  selector: 'app-reject-form-read-only',
  templateUrl: './reject-form-read-only.component.html',
})
export class RejectFormReadOnlyComponent {
  @Input('iRejData') rejData: RejectFormModel;

  constructor() {}
}
