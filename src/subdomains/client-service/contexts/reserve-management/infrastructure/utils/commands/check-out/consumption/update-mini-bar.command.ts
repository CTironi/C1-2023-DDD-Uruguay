import { IsNumber, IsUUID } from "class-validator";
import { IUpdateMiniBar } from "../../../../../domain";
import { ApiProperty } from "@nestjs/swagger";


export class UpdateMiniBarCommand implements IUpdateMiniBar {

    @ApiProperty({
        example:'df0262ec-61af-4c37-abe7-7f86db59b3ca',
        description:'Id del consumption a actualizar',
    })
    @IsUUID()
    consumptionId: string;

    @ApiProperty({
        example:12334,
        description:'valor del consumo de miniBar a actualizar',
    })
    @IsNumber()
    miniBar: number;
}