import { ReactNode } from 'react';
import { Sumary } from '../Sumary';
import { TransactionsTable } from '../TransactionsTable';

import { Container } from './styles';

interface DashboardProps {
  children: ReactNode;
}

export function Dashboard() {
  return (
    <Container>
      <Sumary />
      <TransactionsTable />
    </Container>
  );
};
