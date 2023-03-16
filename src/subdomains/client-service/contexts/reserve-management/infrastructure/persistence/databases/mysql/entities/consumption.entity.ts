import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"

import { ConsumptionDomainEntity } from '../../../../../domain/entities';
import { CheckOutMySqlEntity } from ".";

@Entity('consumption')
export class ConsumptionMySqlEntity extends ConsumptionDomainEntity {
    @PrimaryGeneratedColumn('uuid')
    consumptionId: string;

    @Column()
    miniBar: number;

    @Column()
    consumptionFood: number;

    @Column()
    laundry: number;

    @Column()
    extra: number;

    @OneToMany( ()=> CheckOutMySqlEntity, (checkOut)=> checkOut.consumption )
    checkOut: CheckOutMySqlEntity;
}