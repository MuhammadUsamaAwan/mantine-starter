import { useState } from 'react';
import { AppShell } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Header from './Header';

export default function Layout() {
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      padding='md'
      navbarOffsetBreakpoint='sm'
      navbar={<Navbar opened={opened} />}
      header={<Header opened={opened} setOpened={setOpened} />}
      styles={theme => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      <Outlet />
    </AppShell>
  );
}
