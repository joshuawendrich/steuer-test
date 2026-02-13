// src/components/Summary.tsx
import React from 'react';
import type { UserData, ComparisonResult, FormData } from '../types';

interface SummaryProps {
  userData1: UserData;
  userData2: UserData;
}

const CheckIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="green"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ verticalAlign: 'middle' }}
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const CrossIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="red"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ verticalAlign: 'middle' }}
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const Summary: React.FC<SummaryProps> = ({ userData1, userData2 }) => {
  const fieldLabels: Record<keyof FormData, string> = {
    einkommen: 'Einkommen',
    steuerklasse: 'Steuerklasse',
    kinderfreibetraege: 'Kinderfreibeträge',
    krankenkassenbeitrag: 'Krankenversicherungsbeitrag',
  };

  const compareData = (): ComparisonResult[] => {
    const results: ComparisonResult[] = [];
    const keys = Object.keys(userData1.data) as Array<keyof FormData>;

    keys.forEach((key) => {
      const user1Value = userData1.data[key];
      const user2Value = userData2.data[key];
      const isDifferent = user1Value !== user2Value;

      results.push({
        field: key,
        user1Value: user1Value,
        user2Value: user2Value,
        isDifferent: isDifferent,
      });
    });
    return results;
  };

  const comparisonResults = compareData();

  return (
    <div className="summary-container">
      <h2>Vergleich der Steuererklärungsdaten</h2>

      <table>
        <thead>
          <tr>
            <th>Feld</th>
            <th>Wert Benutzer 1</th>
            <th>Wert Benutzer 2</th>
            <th>Gleiche Antwort</th>
            <th>Verbesserungsvorschlag</th>
          </tr>
        </thead>
        <tbody>
          {comparisonResults.map((result) => (
            <tr key={result.field}>
              <td>{fieldLabels[result.field]}</td>
              <td>{result.user1Value}</td>
              <td className={result.isDifferent ? 'highlight-diff' : ''}>
                {result.user2Value}
              </td>
              <td>{result.isDifferent ? <CrossIcon /> : <CheckIcon />}</td>
              <td>
                {result.isDifferent && (
                  <textarea
                    placeholder="Feedback eingeben"
                    rows={1}
                    style={{ width: '100%' }}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Summary;
