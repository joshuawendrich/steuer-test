// src/components/UserForm.tsx
import React, { useState } from 'react';
import type { FormData } from '../types';

interface UserFormProps {
  userNumber: 1 | 2;
  onSubmit: (data: FormData) => void;
}

const UserForm: React.FC<UserFormProps> = ({ userNumber, onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    einkommen: 0, // Einkommen (Income)
    steuerklasse: '', // Steuerklasse (Tax Class, e.g., I, III, IV)
    kinderfreibetraege: 0, // Kinderfreibeträge (Child Allowances)
    krankenkassenbeitrag: 0, // Krankenversicherungsbeitrag (Health Insurance Contribution)
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'number' ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="user-form-container">
      <h2>Eingabe Benutzer {userNumber}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor={`einkommen-${userNumber}`}>Einkommen (€):</label>
          <input
            type="number"
            id={`einkommen-${userNumber}`}
            name="einkommen"
            value={formData.einkommen}
            onChange={handleChange}
            required
            min="0"
            step="0.01"
          />
        </div>
        <div>
          <label htmlFor={`steuerklasse-${userNumber}`}>Steuerklasse (z.B. I, III, IV):</label>
          <input
            type="text"
            id={`steuerklasse-${userNumber}`}
            name="steuerklasse"
            value={formData.steuerklasse}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor={`kinderfreibetraege-${userNumber}`}>Kinderfreibeträge:</label>
          <input
            type="number"
            id={`kinderfreibetraege-${userNumber}`}
            name="kinderfreibetraege"
            value={formData.kinderfreibetraege}
            onChange={handleChange}
            required
            min="0"
          />
        </div>
        <div>
          <label htmlFor={`krankenkassenbeitrag-${userNumber}`}>Krankenversicherungsbeitrag (€):</label>
          <input
            type="number"
            id={`krankenkassenbeitrag-${userNumber}`}
            name="krankenkassenbeitrag"
            value={formData.krankenkassenbeitrag}
            onChange={handleChange}
            required
            min="0"
            step="0.01"
          />
        </div>
        <button type="submit">Daten für Benutzer {userNumber} übermitteln</button>
      </form>
    </div>
  );
};

export default UserForm;
