import {
  IsString,
  IsNumber,
  IsArray,
  ArrayNotEmpty,
  Min,
  ValidateIf,
  IsNotEmpty,
  Validate,
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface
} from 'class-validator';
import { cpf, cnpj } from 'cpf-cnpj-validator';
import { CropTypeValidator } from '../utils/valid-crops';

@ValidatorConstraint({ name: 'IsValidDocument', async: false })
class IsValidDocument implements ValidatorConstraintInterface {
  validate(document: string) {
    return cpf.isValid(document) || cnpj.isValid(document);
  }

  defaultMessage(args: ValidationArguments) {
    return `${args.value} não é um CPF ou CNPJ válido`;
  }
}

export class CreateProducerDto {
  @IsString()
  @Validate(IsValidDocument)
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
  @Validate(CropTypeValidator, {
    message: 'Uma ou mais culturas não são válidas. Use: Soja, Milho, Algodão, Café, Cana de Açucar.',
  })
  crops: string[];
}
