import { IsDate, IsNumber, IsUUID } from "class-validator";
import { IAddInvoice } from "../../../../domain";
import { ApiProperty } from "@nestjs/swagger";

export class AddInvoiceCommand implements IAddInvoice {

    @ApiProperty({
        example:'df0262ec-61af-4c37-abe7-7f86db59b3ca',
        description:'Id del invoice a crear',
    })
    @IsUUID()
    invoiceId: string;

    @ApiProperty({
        example:"2023-03-16T21:20:14.315Z",
        description:'Id del checkOut a crear',
    })
    @IsDate()
    date: Date;

    @ApiProperty({
        example:1230,
        description:'costo del invoice',
    })
    @IsNumber()
    cost: number;
}