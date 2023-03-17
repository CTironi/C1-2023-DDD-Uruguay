import { IsDate, IsString, IsUUID } from "class-validator";
import { ICreateCheckOut } from "../../../../domain";
import { ApiProperty } from "@nestjs/swagger";

export class CreateCheckOutCommand implements ICreateCheckOut {

    @ApiProperty({
        example:'df0262ec-61af-4c37-abe7-7f86db59b3ca',
        description:'Id del checkOut a crear',
    })
    @IsUUID()
    checkOutId: string;

    @ApiProperty({
        example:"2023-03-16T21:20:14.315Z",
        description:'fecha del cierre de checkOut',
    })
    @IsDate()
    endDate: Date;

    @ApiProperty({
        example:'Marta Legrand',
        description:'nombre de recepsionista',
    })
    @IsString()
    recepsionistName: string;

    @ApiProperty({
        example:'df0262ec-61af-4c37-abe7-7f86db59b3ca',
        description:'Id del invoice ',
    })
    @IsString()
    invoiceId: string;

    @ApiProperty({
        example:'df0262ec-61af-4c37-abe7-7f86db59b3ca',
        description:'Id del cosumption',
    })
    @IsString()
    consumptionId: string;
}