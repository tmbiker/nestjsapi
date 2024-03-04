import { Column, Entity, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm";
import { Inscripciones } from '../inscripciones/inscripciones.entity';

@Entity({name: 'equipos'})
export class Equipos {
    @PrimaryGeneratedColumn('increment')
    idregistro: number;
    @Column({type: 'int'})
    idequipo: number;
    @Column()
    nombre: string;
    @Column()
    provincia: string;
    @Column()
    imagen: string;
    @Column({type: 'int'})
    habilitado: number;

    @OneToMany(() => Inscripciones, inscripcion => inscripcion.idequipo)
    @JoinColumn({name: 'idequipo', referencedColumnName: 'idequipo'})
    inscripcion: Inscripciones[];

}