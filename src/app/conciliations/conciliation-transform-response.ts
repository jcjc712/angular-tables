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
                    id_t_incidencias_conciliacion_mit: item.id_t_incidencias_conciliacion_mit,
                    id_t_conciliaciones_mit: item.id_t_conciliaciones_mit,
                    detail: item.incidencia,
                    fecha_creacion: item.fecha_creacion,
                    updated: item.fecha_actualizacion,
                    nb_response: item.nb_response,
                    nu_operation: item.nu_operation,
                    tp_operation: item.tp_operation,
                    nu_auth: item.nu_auth,
                    estatus: item.estatus,
                    cd_usuario: item.cd_usuario,
                    cd_empresa: item.cd_empresa,
                    nu_sucursal: item.nu_sucursal,
                    nu_afiliacion: item.nu_afiliacion,
                    nb_referencia: item.nb_referencia,
                    cc_nombre: item.cc_nombre,
                    cc_num: item.cc_num,
                    cc_tp: item.cc_tp,
                    nu_importe: item.nu_importe,
                    cd_tipopago: item.cd_tipopago,
                    cd_tipocobro: item.cd_tipocobro,
                    cd_instrumento: item.cd_instrumento,
                    fh_registro: item.fh_registro,
                    fh_bank: item.fh_bank,
                    nb_currency: item.nb_currency,
                    cd_resp: item.cd_resp,
                    approved: item.approved,
                    nb_serie_lector: item.nb_serie_lector,
                    cc_bin: item.cc_bin,
                    cc_mes: item.cc_mes,
                    cc_anio: item.cc_anio,
                    cd_forma_operar_banda_moto: item.cd_forma_operar_banda_moto,
                    nb_version: item.nb_version,
                    mcpagos: item.mcpagos,
                    propina: item.propina,
                    confirmado: item.confirmado
                }
            );
        });
        resp._body = body;
        return resp;
    }
}
