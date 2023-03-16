import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"

import { RoomDomainEntity } from '../../../../../domain/entities/';
import { ReserveMySqlEntity } from './';

@Entity('room')
export class RoomMySqlEntity extends RoomDomainEntity {

    @PrimaryGeneratedColumn('uuid')
    roomId: string;

    @Column()
    location: string;

    @Column()
    accommodation: string;

    @Column()
    type: string;

    @Column()
    state: boolean;

    @Column()
    roomNumber: number;

    @OneToMany( ()=> ReserveMySqlEntity, (reserve)=> reserve.room)
    reserve: ReserveMySqlEntity
}