import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'corredores2024'})
export class Corredores2024 {
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
    c_telefono: string;
    @Column({select: false})
    telefono: string;
    @Column({select: false})
    c_celular: string;
    @Column({select: false})
    celular: string;
    @Column()
    genero: string;
    @Column({select : false})
    fecha_nacimiento: Date;
    @Column({select : false})
    email: string;
    @Column({select: false})
    pais: string;
    @Column({select: false})
    imagen: string;
    @Column({select: false})
    idequipo: number;
}