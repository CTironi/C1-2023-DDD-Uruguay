import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('event')
export class EventMySqlEntity {

    @PrimaryColumn()
    type: string;

    @Column()
    data: string;

    @Column()
    createdAt: string;
}