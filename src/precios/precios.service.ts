import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Precios } from './precios.entity';

@Injectable()
export class PreciosService {

    constructor(@InjectRepository(Precios) private readonly preciosRepository: Repository<Precios>,){}

    async getPrecios(){

        const fecha = new Date()
        // const diaActual = fecha.getDate()
        // const mesActual = fecha.getMonth()+1
        // const anioActual = fecha.getFullYear()
        const diaActual = 27
        const mesActual = 5
        const anioActual = 2023

        let fechaActual = new Date(String(anioActual) + '-' + String(mesActual).padStart(2,'0') + '-' + String(diaActual).padStart(2,'0'))

        try {

            const preciosFound = await this.preciosRepository.query(
                'SELECT CAST(p.idregistro AS CHARACTER) id, p.orden, p.idprecio, p.nombre, p.precio, p.regalos, p.proline, p.cc9, p.siglas FROM precios p WHERE p.desde <= ? and p.hasta >= ? and anio = ?;',
                [fechaActual, fechaActual, anioActual]
            )

            return preciosFound

        } catch (error) {
            return new HttpException("Precios No Existe", HttpStatus.NOT_FOUND)
        }
    }
}