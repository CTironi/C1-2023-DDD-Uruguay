import { IsString, IsUUID } from "class-validator";
import { IUpdateAccessLevel } from "../../../../../domain";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateAccessLevelCommand implements IUpdateAccessLevel {

    @ApiProperty({
        example:'df0262ec-61af-4c37-abe7-7f86db59b3ca',
        description:'Id de roomKey a actualizar',
    })
    @IsUUID()
    roomKeyId?: string;

    @ApiProperty({
        example:'Level1',
        description:'Nivel de acceso a actualizar',
    })
    @IsString()
    accessLevel?: string;
}