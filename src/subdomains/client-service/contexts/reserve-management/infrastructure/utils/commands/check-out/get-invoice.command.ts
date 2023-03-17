import { IsUUID } from "class-validator";
import { IGetInvoice } from "../../../../domain";
import { ApiProperty } from "@nestjs/swagger";

export class GetInvoiceCommand implements IGetInvoice{

    @ApiProperty({
        example:'df0262ec-61af-4c37-abe7-7f86db59b3ca',
        description:'Id del invoice a buscar',
    })
    @IsUUID()
    invoiceId: string
}