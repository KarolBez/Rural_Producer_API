import { cpf, cnpj } from 'cpf-cnpj-validator';

export function isValidCpfCnpj(value: string): boolean {
  const cleaned = value.replace(/\D/g, '');
  return cleaned.length === 11 ? cpf.isValid(cleaned) : cnpj.isValid(cleaned);
}