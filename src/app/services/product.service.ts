import { Http } from '@angular/http';
import { environment } from './../../environments/environment';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService extends DataService {

  constructor(http:Http) { 
    super(environment.apiUrl+'/admin/product/',http);

  }

}
