import { IsString, IsUUID } from "class-validator";
import { IUpdatePaymentMethod } from "../../../../domain";
import { ApiProperty } from "@nestjs/swagger";

export class UpdatePaymentMethodCommand implements IUpdatePaymentMethod {

    @ApiProperty({
        example:'df0262ec-61af-4c37-abe7-7f86db59b3ca',
        description:'Id del customer a actualizar',
    })
    @IsUUID()
    customerId?: string;

    @ApiProperty({
        example:'Debito',
        description:'metodo de pago a actualizar',
    })
    @IsString()
    paymentMethod?: string;
}