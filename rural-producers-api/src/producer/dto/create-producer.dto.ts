import {
  IsString,
  IsNumber,
  IsArray,
  ArrayNotEmpty,
  Min,
  IsNotEmpty,
  Validate,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments
} from 'class-validator';
import { cpf, cnpj } from 'cpf-cnpj-validator';

//
// Validador de CPF ou CNPJ
//
@ValidatorConstraint({ name: 'IsCpfOrCnpj', async: false })
export class IsCpfOrCnpj implements ValidatorConstraintInterface {
  validate(document: string): boolean {
    return cpf.isValid(document) || cnpj.isValid(document);
  }

  defaultMessage(args: ValidationArguments): string {
    return `${args.value} não é um CPF ou CNPJ válido`;
  }
}


const VALID_CROPS = ['Soja', 'Milho', 'Algodão', 'Café', 'Cana de Açucar'];

@ValidatorConstraint({ name: 'CropTypeValidator', async: false })
export class CropTypeValidator implements ValidatorConstraintInterface {
  validate(crops: string[]): boolean {
    return Array.isArray(crops) && crops.every(crop => VALID_CROPS.includes(crop));
  }

  defaultMessage(): string {
    return 'Uma ou mais culturas não são válidas. Use: Soja, Milho, Algodão, Café, Cana de Açucar.';
  }
}


export class CreateProducerDto {
  @IsString()
  @Validate(IsCpfOrCnpj)
  cpfCnpj: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  farmName: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  state: string;

  @IsNumber()
  @Min(0)
  totalArea: number;

  @IsNumber()
  @Min(0)
  agriculturalArea: number;

  @IsNumber()
  @Min(0)
  vegetationArea: number;

  @IsArray()
  @ArrayNotEmpty()
  @Validate(CropTypeValidator)
  crops: string[];
}