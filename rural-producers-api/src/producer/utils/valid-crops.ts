import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

const VALID_CROPS = ['Soja', 'Milho', 'Algodão', 'Café', 'Cana de Açucar'];

@ValidatorConstraint({ name: 'CropTypeValidator', async: false })
export class CropTypeValidator implements ValidatorConstraintInterface {
  validate(crops: string[], args: ValidationArguments) {
    return crops.every(crop => VALID_CROPS.includes(crop));
  }

  defaultMessage(args: ValidationArguments) {
    return `Cada cultura deve ser uma das seguintes: ${VALID_CROPS.join(', ')}`;
  }
}

export { VALID_CROPS };