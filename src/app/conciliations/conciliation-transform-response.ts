import {TransformResponseInterface} from '../shared/smart-table/transform-response-interface';

export class ConciliationTransformResponse implements TransformResponseInterface {
    transform(resp: any) {
        const response = resp.json();
        resp.headers.append('x-total-count', response.iTotalDisplayRecords);
        resp.headers.append('access-control-expose-headers', 'X-Total-Count');
        const body = [];
        response.data.forEach((item) => {
            body.push(
                {
                    idIncidence: item.id_t_incidencias_conciliacion_mit,
                    idConciliation: item.id_t_conciliaciones_mit,
                    detail: item.incidencia,
                    created: item.fecha_creacion,
                    updated: item.fecha_actualizacion,
                    nbResponse: item.nb_response,
                    operationNumber: item.nu_operation,
                    authorizationType: item.tp_operation,
                    authorizationNumber: item.nu_auth,
                    status: item.estatus,
                }
            );
        });
        resp._body = body;
        return resp;
    }
}
