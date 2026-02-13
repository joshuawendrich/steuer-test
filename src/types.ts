// src/types.ts

export interface FormData {
  einkommen: number; // Einkommen (Income)
  steuerklasse: string; // Steuerklasse (Tax Class, e.g., I, III, IV)
  kinderfreibetraege: number; // Kinderfreibeträge (Child Allowances)
  krankenkassenbeitrag: number; // Krankenversicherungsbeitrag (Health Insurance Contribution)
}

export interface UserData {
  userNumber: 1 | 2;
  data: FormData;
}

export interface ComparisonResult {
  field: keyof FormData;
  user1Value: string | number;
  user2Value: string | number;
  isDifferent: boolean;
}