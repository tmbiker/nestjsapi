import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'precios'})
export class Precios {
    @PrimaryGeneratedColumn('increment')
    idregistro: number;
    @Column({select: false})
    orden: number;
    @Column({select: false})
    anio: number;
    @Column()
    idprecio: number;
    @Column()
    nombre: String;
    @Column()
    precio: Number;
    @Column()
    desde: Date;
    @Column()
    hasta: Date;
    @Column()
    regalos: Number;
    @Column()
    proline: Number;
    @Column()
    cc9: Number;
    @Column()
    siglas: String;
    @Column()
    cupo: Number;
}