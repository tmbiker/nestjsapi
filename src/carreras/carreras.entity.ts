import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'carreras'})
export class Carreras {
    @PrimaryGeneratedColumn('increment')
    idregistro: number;
    @Column()
    idfecha: number;
    @Column()
    anio: number;
    @Column()
    habilitado: number;
}
