import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'categorias_tabla'})
export class Categorias_Tabla {
    @PrimaryGeneratedColumn('increment')
    idregistro: number;
    @Column({select: false})
    idcategoria1: number;
    @Column({select: false})
    idcategoria2: number;
    @Column()
    idcategoria: number;
}