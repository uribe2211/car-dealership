import { IsString,IsNumber, isString, IsUUID, IsOptional } from "class-validator";

export class UpdateCarDto {

    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?: string;

    @IsString({message:"Name must be a string"})
    @IsOptional()
    readonly name?: string;
    
    @IsNumber({}, { message: "Price must be a number" })
    @IsOptional()
    readonly price?: number;
}