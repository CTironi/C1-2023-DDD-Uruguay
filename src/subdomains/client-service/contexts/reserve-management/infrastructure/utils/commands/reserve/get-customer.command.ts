import { IsUUID } from "class-validator";
import { IGetCustomer } from "../../../../domain";
import { ApiProperty } from "@nestjs/swagger";

export class GetCustomerCommand implements IGetCustomer {

    @ApiProperty({
        example:'df0262ec-61af-4c37-abe7-7f86db59b3ca',
        description:'Id del customer a buscar',
    })
    @IsUUID()
    customerId: string;
} 