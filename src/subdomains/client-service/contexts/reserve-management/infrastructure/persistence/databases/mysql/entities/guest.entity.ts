import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"

import { GuestDomainEntity } from '../../../../../domain/entities';
import { CheckInMySqlEntity } from "./";

@Entity('guest')
export class GuestMySqlEntity extends GuestDomainEntity {
    @PrimaryGeneratedColumn('uuid')
    guestId: string;

    @Column()
    fullName: string;

    @Column()
    document: number;

    @Column()
    phone: string;

    @Column()
    email: string;

    @OneToMany( ()=> CheckInMySqlEntity, (checkIn)=> checkIn.guest )
    checkIn: CheckInMySqlEntity;
}