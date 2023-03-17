import { IsNumber, IsUUID } from "class-validator";
import { IAddConsumption } from "../../../../domain";
import { ApiProperty } from "@nestjs/swagger";

export class AddConsumptionCommand implements IAddConsumption {

    @ApiProperty({
        example:'df0262ec-61af-4c37-abe7-7f86db59b3ca',
        description:'Id del consumption a crear',
    })
    @IsUUID()
    consumptionId: string;

    @ApiProperty({
        example:123,
        description:'valor del consumo de minibar',
    })
    @IsNumber()
    miniBar: number;

    @ApiProperty({
        example:456,
        description:'valor del consumo de comida',
    })
    @IsNumber()
    consumptionFood: number;

    @ApiProperty({
        example:12,
        description:'valor del consumo de lavanderia',
    })
    @IsNumber()
    laundry: number;

    @ApiProperty({
        example:1300,
        description:'valor del consumo de extras',
    })
    @IsNumber()
    extra: number;
}