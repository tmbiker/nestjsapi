import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'pecheras'})
export class Placas {
    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column()
    estado: number;
    @Column()
    idcategoria: number;
    @Column()
    activada: number;
}