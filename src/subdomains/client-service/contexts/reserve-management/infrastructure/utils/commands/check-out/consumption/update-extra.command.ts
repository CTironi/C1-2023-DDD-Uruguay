import { IsNumber, IsUUID } from "class-validator";
import { IUpdateExtra } from "../../../../../domain";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateExtraCommand implements IUpdateExtra {

    @ApiProperty({
        example:'df0262ec-61af-4c37-abe7-7f86db59b3ca',
        description:'Id del consumption a actualizar',
    })
    @IsUUID()
    consumptionId: string;

    @ApiProperty({
        example:12322,
        description:'valor del extra a actualizar',
    })
    @IsNumber()
    extra: number;
}