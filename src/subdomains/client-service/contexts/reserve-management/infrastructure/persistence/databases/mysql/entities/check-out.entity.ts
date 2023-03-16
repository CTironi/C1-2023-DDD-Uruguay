import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from "typeorm"

import { CheckOutDomainEntity } from '../../../../../domain/entities';
import { InvoiceMySqlEntity, ConsumptionMySqlEntity } from '.';


@Entity('check-out')
export class CheckOutMySqlEntity extends CheckOutDomainEntity {
    @PrimaryGeneratedColumn('uuid')
    checkOutId: string;

    @Column()
    endDate: Date;

    @Column()
    recepsionistName: string;

    @ManyToOne(() => InvoiceMySqlEntity, (invoice) => invoice.checkOut,
        {
            cascade: ['insert', 'update'],
        },
    )
    @JoinColumn()
    invoice: InvoiceMySqlEntity;

    @ManyToOne(() => ConsumptionMySqlEntity, (consumption) => consumption.checkOut,
        {
            cascade: ['insert', 'update'],
        },
    )
    @JoinColumn()
    consumption: ConsumptionMySqlEntity;
}