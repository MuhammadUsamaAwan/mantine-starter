import { Routes, Route } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { DatesProvider } from '@mantine/dates';
import useTheme from './hooks/useTheme';
import Layout from './layouts/Layout';
import Forms from './features/example/pages/Forms';

export default function App() {
  const theme = useTheme();

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      <DatesProvider settings={{ locale: 'en', firstDayOfWeek: 1, weekendDays: [0, 6] }}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Forms />} />
          </Route>
        </Routes>
      </DatesProvider>
    </MantineProvider>
  );
}
