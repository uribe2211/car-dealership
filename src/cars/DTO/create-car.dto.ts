import { IsString,IsNumber } from "class-validator";

export class CreateCarDto {

    @IsString({message:"Name must be a string"})
    readonly name: string;
    
    @IsNumber({}, { message: "Price must be a number" })
    readonly price: number;
}