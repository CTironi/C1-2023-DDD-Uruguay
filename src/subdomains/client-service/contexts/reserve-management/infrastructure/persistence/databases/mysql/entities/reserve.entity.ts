import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from "typeorm"

import { ReserveDomainEntity } from '../../../../../domain/entities/';
import { CustomerMySqlEntity, RoomMySqlEntity } from './';


@Entity()
export class ReserveMySqlEntity extends ReserveDomainEntity {
    @PrimaryGeneratedColumn('uuid')
    reserveId: string;

    @Column()
    numberOfGuests: number;

    @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
    startDate: Date;
    
    @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
    endDate: Date;

    @ManyToOne(() => CustomerMySqlEntity, (customer) => customer.reserve,
        {
            cascade: ['insert', 'update'],
        },
    )
    @JoinColumn()
    customer: CustomerMySqlEntity;


    @ManyToOne(() => RoomMySqlEntity, (room) => room.reserve,
        {
            cascade: ['insert', 'update'],
        },
    )
    @JoinColumn()
    room: RoomMySqlEntity
}