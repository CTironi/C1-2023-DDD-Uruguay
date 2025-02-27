import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('event')
export class EventMySqlEntity {

    @PrimaryGeneratedColumn('uuid')
    eventId: string;

    @Column()
    type: string;

    @Column({ length: 1000 })
    data: string;

    @Column()
    createdAt: string;
}