import { IsUUID } from "class-validator";
import { IGetConsumption } from "../../../../domain";
import { ApiProperty } from "@nestjs/swagger";

export class GetConsumptionCommand implements IGetConsumption{

    @ApiProperty({
        example:'df0262ec-61af-4c37-abe7-7f86db59b3ca',
        description:'Id del consumption a buscar',
    })
    @IsUUID()
    consumptionId: string
}