import {TransformResponseInterface} from '../shared/smart-table/transform-response-interface';
export class ConciliationTransformResponse implements TransformResponseInterface {
    transform(resp: Response) {
        resp.headers.append('holi', 'holi' )
        console.log(resp.headers);
        return resp;
    }
}
