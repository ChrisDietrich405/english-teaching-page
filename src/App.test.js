import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('renders the title and name', () => {
  render(<App />);
  
  // Check for the presence of the name "Chris Dietrich"
  expect(screen.getByText(/Dietrich/i)).toBeInTheDocument();
  
  // Check for the presence of the "Professor de Inglês"
//   expect(screen.getByText(/Professor de Inglês/i)).toBeInTheDocument();
});

// test('renders credentials and price', () => {
//   render(<App />);

//   // Check for "aulas de inglês online"
//   expect(screen.getByText(/aulas de inglês online/i)).toBeInTheDocument();

//   // Check for "aulas para todos os niveis"
//   expect(screen.getByText(/aulas para todos os niveis/i)).toBeInTheDocument();

//   // Check for the price $17/hora
//   expect(screen.getByText(/\$17\/hora/i)).toBeInTheDocument();
// });

// test('renders testimonials section', () => {
//   render(<App />);

//   // Check for testimonials heading
//   expect(screen.getByText(/O que estao dizendo?/i)).toBeInTheDocument();

//   // Check for specific testimonial content
//   expect(screen.getByText(/Chris é um professor de inglês com algumas camadas de psicólogos/i)).toBeInTheDocument();
// });

// test('renders benefits list', () => {
//   render(<App />);

//   // Check for "Política de cancelamento muito flexível"
//   expect(screen.getByText(/Política de cancelamento muito flexível/i)).toBeInTheDocument();

//   // Check for "Acessibilidade (se você tiver dúvidas fora da aula, mande-me uma mensagem a qualquer momento)"
//   expect(screen.getByText(/Acessibilidade/i)).toBeInTheDocument();
// });
