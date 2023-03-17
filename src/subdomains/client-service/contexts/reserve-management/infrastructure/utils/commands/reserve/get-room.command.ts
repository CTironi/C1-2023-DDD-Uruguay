import { IsUUID } from "class-validator";
import { IGetRoom } from "../../../../domain/interfaces/commands/";
import { ApiProperty } from "@nestjs/swagger";

export class GetRoomCommand implements IGetRoom {
    
    @ApiProperty({
        example:'df0262ec-61af-4c37-abe7-7f86db59b3ca',
        description:'Id de la room a buscar',
    })
    @IsUUID()
    roomId: string;
} 