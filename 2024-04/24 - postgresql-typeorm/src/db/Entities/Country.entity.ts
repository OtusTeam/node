import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("countries")
export class Country{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 1024 })
    name: string;
}