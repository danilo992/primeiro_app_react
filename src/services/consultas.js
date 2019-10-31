import { URL_API } from "./base";

export function listaConsultas(){
    return fetch(`${URL_API}/consultas`).then(resultado => resultado.json());
}