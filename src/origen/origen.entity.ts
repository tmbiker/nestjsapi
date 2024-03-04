import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'origen'})
export class Origen {
    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column()
    lugar: string;
    @Column()
    siglas: string;
}
