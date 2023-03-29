import { Routes, Route } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import useTheme from './hooks/useTheme';
import Layout from './layouts/Layout';
import Forms from './features/example/pages/Forms';

export default function App() {
  const theme = useTheme();

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Forms />} />
        </Route>
      </Routes>
    </MantineProvider>
  );
}
