import { DataService } from './data.service';
import { Http } from '@angular/http';

import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class SignupService extends DataService{

  constructor(http:Http) {
    super(environment.apiUrl+'/user/signup/',http);
   }

}
