import { IsNumber, IsString, IsUUID } from "class-validator";
import { IAddRoomKey } from "../../../../domain";
import { ApiProperty } from "@nestjs/swagger";

export class AddRoomKeyCommand implements IAddRoomKey {

    @ApiProperty({
        example:'df0262ec-61af-4c37-abe7-7f86db59b3ca',
        description:'Id de roomKey a crear',
    })
    @IsUUID()
    roomKeyId: string;

    @ApiProperty({
        example:2,
        description:'numero de la habitacion',
    })
    @IsNumber()
    roomNumber: number;

    @ApiProperty({
        example:'Level2',
        description:'nivel de acceso de la roomKey',
    })
    @IsString()
    accessLevel: string;
}