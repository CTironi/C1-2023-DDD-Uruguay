import { IsAlpha, IsNumber, IsString, IsUUID, MaxLength } from "class-validator";
import { IAddCustomer } from "../../../../domain/interfaces/commands";
import { ApiProperty } from "@nestjs/swagger";

export class AddCustomerCommand implements IAddCustomer {

    @ApiProperty({
        example:'df0262ec-61af-4c37-abe7-7f86db59b3ca',
        description:'Id del customer a crear',
    })
    @IsUUID()
    customerId?: string;

    @ApiProperty({
        example:'Cristian Tironi',
        description:'Nombre del customer',
    })
    @IsString()
    @IsAlpha()
    @MaxLength(50)
    fullName?: string;

    @ApiProperty({
        example:12345678,
        description:'documento del customer',
    })
    @IsNumber()
    @MaxLength(10)
    document?: number;

    @ApiProperty({
        example:'Credito',
        description:'metodo de pago',
    })
    @IsString()
    paymentMethod?: string;

}