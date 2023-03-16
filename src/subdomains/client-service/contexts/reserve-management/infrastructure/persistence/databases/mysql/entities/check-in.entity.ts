import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from "typeorm"

import { CheckInDomainEntity } from '../../../../../domain/entities';
import { GuestMySqlEntity, RoomKeyMySqlEntity } from '.';


@Entity('check-in')
export class CheckInMySqlEntity extends CheckInDomainEntity {
    
    @PrimaryGeneratedColumn('uuid')
    checkInId: string;

    @Column()
    recepsionistName: string;

    @Column()
    startDate: Date;

    @ManyToOne(() => GuestMySqlEntity, (guest) => guest.checkIn,
        {
            cascade: ['insert', 'update'],
        },
    )
    @JoinColumn()
    guest: GuestMySqlEntity;


    @ManyToOne(() => RoomKeyMySqlEntity, (roomKey) => roomKey.checkIn,
        {
            cascade: ['insert', 'update'],
        },
    )
    @JoinColumn()
    roomKey: RoomKeyMySqlEntity
}