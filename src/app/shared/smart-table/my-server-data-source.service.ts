import { Injectable } from '@angular/core';
import { ServerDataSource } from 'ng2-smart-table';
import {TransformResponseInterface} from './transform-response-interface';
@Injectable()
export class MyServerDataSourceService extends ServerDataSource {
  classTransform: TransformResponseInterface;
  setTransformClass(classTransform: TransformResponseInterface) {
    this.classTransform = classTransform;
  }
  getElements(): Promise<any> {
    return this.requestElements().map(res => {
      res = this.classTransform.transform(res);
      this.lastRequestCount = this.extractTotalFromResponse(res);
      this.data = this.extractDataFromResponse(res);

      return this.data;
    }).toPromise();
  }
}
