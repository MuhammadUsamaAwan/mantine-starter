import { Routes, Route } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { DatesProvider } from '@mantine/dates';
import { ModalsProvider } from '@mantine/modals';
import useTheme from './hooks/useTheme';
import Layout from './layouts/Layout';
import Forms from './features/example/pages/Forms';
import Modals from './features/example/pages/Modals';

export default function App() {
  const theme = useTheme();

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      <DatesProvider settings={{ locale: 'en', firstDayOfWeek: 1, weekendDays: [0, 6] }}>
        <ModalsProvider modalProps={{ centered: true, size: 'auto' }} labels={{ confirm: 'Confirm', cancel: 'Cancel' }}>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Forms />} />
              <Route path='forms' element={<Forms />} />
              <Route path='modals' element={<Modals />} />
            </Route>
          </Routes>
        </ModalsProvider>
      </DatesProvider>
    </MantineProvider>
  );
}
