import { Column, Entity, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm";
import { Categorias } from '../categorias/categorias.entity';

@Entity({name: 'carreras_categorias'})
export class CarrerasCategorias {
    @PrimaryGeneratedColumn('increment')
    idregistro: number;
    @Column({select: false})
    idfecha: number;
    @Column({select: false})
    anio: number;
    @Column()
    idcategoria: number;
    
    @OneToMany(() => Categorias, categorias => categorias.idcategoria)
    @JoinColumn({name: 'idcategoria', referencedColumnName: 'idcategoria'})
    categorias: Categorias;
}
