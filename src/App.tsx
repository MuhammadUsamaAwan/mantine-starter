import { Routes, Route } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import useTheme from './hooks/useTheme';

export default function App() {
  const theme = useTheme();

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      <Routes>
        <Route index element={<h1>Hello World</h1>} />
      </Routes>
    </MantineProvider>
  );
}
