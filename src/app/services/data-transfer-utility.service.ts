import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { RejectFormModel } from 'src/shared/models/reject-form.model';
import { AcceptFormModel } from 'src/shared/models/accept-form.model';

@Injectable({
  providedIn: 'root',
})
export class DataTransferUtilityService {
  constructor() {}

  rejData = new Subject<RejectFormModel>();

  acceptData = new Subject<AcceptFormModel>();
}
