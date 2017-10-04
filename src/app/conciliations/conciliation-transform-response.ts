import {TransformResponseInterface} from '../shared/smart-table/transform-response-interface';

export class ConciliationTransformResponse implements TransformResponseInterface {
    transform(resp: any) {
        /*cc_anio
            :
            "21"
        cc_bin
            :
            "525678"
        cc_mes
            :
            "02"
        cc_nombre
            :
            "PERFIL EJECUTIVO/PRG     "
        cc_num
            :
            "4993"
        cc_tp
            :
            "MasterCard"
        cd_empresa
            :
            "Z940"
        cd_forma_operar_banda_moto
            :
            "10"
        cd_instrumento
            :
            "D"
        cd_resp
            :
            "00"
        cd_tipocobro
            :
            "BANDA"
        cd_tipopago
            :
            "Contado"
        cd_usuario
            :
            "Z940JGAI0"
        estatus
            :
            "1"
        fecha_actualizacion
            :
            null
        fecha_creacion
            :
            "2017-07-28 02:30:08"
        fh_bank
            :
            "27/07/2017"
        fh_registro
            :
            "2017-07-27 03:22:00"
        id_t_conciliaciones_mit
            :
            "425"
        id_t_incidencias_conciliacion_mit
            :
            "45170"
        incidencia
            :
            "procesada Correctamente"
        nb_currency
            :
            "MXN"
        nb_referencia
            :
            "3"
        nb_resp
            :
            "approved"
        nb_response
            :
            "approved"
        nb_serie_lector
            :
            "280263619"
        nb_version
            :
            "mcpagos 4.3.19"
        nu_afiliacion
            :
            "7479818"
        nu_auth
            :
            "002622"
        nu_importe
            :
            "1270.00"
        nu_operation
            :
            "449210161"
        nu_sucursal
            :
            "5875"
        propina
            :
            "0.00"
        tp_operation
            :
            "VENTA"
        */
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

                }
            );
        });
        resp._body = body;
        return resp;
    }
}
