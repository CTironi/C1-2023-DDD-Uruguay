import { IsNumber, IsUUID } from "class-validator";
import { IUpdateCost } from "../../../../../domain";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateCostCommand implements IUpdateCost {
    
    @ApiProperty({
        example:'df0262ec-61af-4c37-abe7-7f86db59b3ca',
        description:'Id del invoice a actualizar',
    })
    @IsUUID()
    invoiceId: string;

    @ApiProperty({
        example:12312,
        description:'valor del costo a actualizar',
    })
    @IsNumber()
    cost: number;
}