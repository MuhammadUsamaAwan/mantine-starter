import { AppShell, Header } from '@mantine/core';
import Navbar from './Navbar';

export default function Layout() {
  return (
    <AppShell
      padding='md'
      navbar={<Navbar />}
      header={
        <Header height={60} p='xs'>
          {/* Header content */}
        </Header>
      }
      styles={theme => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      {/* Your application here */}
    </AppShell>
  );
}
