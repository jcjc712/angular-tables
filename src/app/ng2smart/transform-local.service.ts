import { Injectable } from '@angular/core';
import {TransformResponseInterface} from '../shared/smart-table/transform-response-interface';

@Injectable()
export class TransformLocalService implements TransformResponseInterface {

  constructor() { }
  transform(resp: Response) {
    resp.headers.append('holi', 'holi' )
    console.log(resp.headers);
    return resp;
  }

}
