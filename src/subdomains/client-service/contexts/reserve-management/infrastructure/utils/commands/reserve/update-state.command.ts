import { IsBoolean, IsUUID } from "class-validator";
import { IUpdateState } from "../../../../domain";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateStateCommand implements IUpdateState{

    @ApiProperty({
        example:'df0262ec-61af-4c37-abe7-7f86db59b3ca',
        description:'Id de la room a actualizar',
    })
    @IsUUID()
    roomId?: string;

    @ApiProperty({
        example: true,
        description:'state de la reserva a actualizar',
    })
    @IsBoolean()
    state?: boolean;
}