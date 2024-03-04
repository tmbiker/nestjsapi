import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { Inscripciones } from '../inscripciones/inscripciones.entity';

@Entity({name: 'corredores2024'})
export class Inscriptos {
    @PrimaryGeneratedColumn('increment')
    idregistro: number;
    @Column({select: false})
    idcorredor: number;
    @Column({select: false})
    doc_numero: number;
    @Column({select: false})
    tipo_doc: string;
    @Column()
    nombre: string;
    @Column()
    apellido: string;
    @Column({select: false})
    domicilio: string;
    @Column({select: false})
    localidad: string;
    @Column()
    provincia: string;
    @Column({select: false})
    codigo_postal: string;
    @Column({select: false})
    c_telefono: number;
    @Column({select: false})
    telefono: number;
    @Column({select: false})
    c_celular: number;
    @Column({select: false})
    celular: number;
    @Column()
    genero: string;
    @Column({select : false})
    fecha_nacimiento: Date;
    @Column({select : false})
    email: string;
    @Column({select: false})
    otros: string;
    @Column({type: 'datetime', default: () => 'CURRENT_TIMESTAMP', select: false})
    fecha_hora: string;
    @Column({select: false})
    pais: string;
    @Column({select: false})
    imagen: string;
    @Column({select: false})
    idequipo: number;

    @OneToOne(type => Inscripciones)
    @JoinColumn({name: 'idregistro', referencedColumnName: "idcorredor" })
    idbiker1: Inscripciones[];

    @OneToOne(type => Inscripciones)
    @JoinColumn({name: 'idcorredor', referencedColumnName: "idcorredor" })
    idbiker2: Inscripciones[];

}