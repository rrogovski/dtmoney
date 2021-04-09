import { ReactNode, useEffect } from 'react';
import { api } from '../../services/api';

import { Container } from './styles';

export function TransactionsTable() {
  useEffect(() => {
    api.get('transactions')
    .then(response => console.table(response.data));
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fazendo uns paranauê!</td>
            <td className="deposit">R$ 500,00</td>
            <td>Desenvolvimento</td>
            <td>30/02/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$ 1.500,00</td>
            <td>Moradia</td>
            <td>31/02/2021</td>
          </tr>
          <tr>
            <td>Fazendo uns paranauê!</td>
            <td>R$ 1.500,00</td>
            <td>Desenvolvimento</td>
            <td>30/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};
