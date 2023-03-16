import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"

import { RoomKeyDomainEntity } from '../../../../../domain/entities';
import { CheckInMySqlEntity } from '.';

@Entity('room-key')
export class RoomKeyMySqlEntity extends RoomKeyDomainEntity {

    @PrimaryGeneratedColumn('uuid')
    roomKeyId: string;

    @Column()
    roomNumber: number;

    @Column()
    accessLevel: string;

    @OneToMany( ()=> CheckInMySqlEntity, (checkIn)=> checkIn.roomKey)
    checkIn: CheckInMySqlEntity
}