import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"

import { CustomerDomainEntity } from '../../../../../domain/entities';
import { ReserveMySqlEntity } from "./reserve.entity";

@Entity('customer')
export class CustomerMySqlEntity extends CustomerDomainEntity {
    @PrimaryGeneratedColumn('uuid')
    customerId: string;

    @Column()
    fullName: string;

    @Column()
    document: number;

    @Column()
    paymentMethod: string;

    @OneToMany( ()=> ReserveMySqlEntity, (reserve)=> reserve.customer )
    reserve: ReserveMySqlEntity;
}