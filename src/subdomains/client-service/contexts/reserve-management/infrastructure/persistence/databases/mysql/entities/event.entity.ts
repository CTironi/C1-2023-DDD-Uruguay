import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('event')
export class EventMySqlEntity {

    @PrimaryColumn()
    type: string;

    @Column({ length: 1000 })
    data: string;

    @Column()
    createdAt: string;
}