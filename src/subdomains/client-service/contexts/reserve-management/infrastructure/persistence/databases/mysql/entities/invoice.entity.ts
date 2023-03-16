import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"

import { InvoiceDomainEntity } from '../../../../../domain/entities';
import { CheckOutMySqlEntity } from "./";

@Entity('invoice')
export class InvoiceMySqlEntity extends InvoiceDomainEntity {
    @PrimaryGeneratedColumn('uuid')
    invoiceId: string;

    @Column()
    date: Date;

    @Column()
    cost: number;

    @OneToMany( ()=> CheckOutMySqlEntity, (checkOut)=> checkOut.invoice )
    checkOut: CheckOutMySqlEntity;
}