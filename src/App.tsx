import { Routes, Route } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { DatesProvider } from '@mantine/dates';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import useTheme from './hooks/useTheme';
import Layout from './layouts/Layout';
import Forms from './features/example/pages/Forms';
import Modals from './features/example/pages/Modals';
import NotificationsExample from './features/example/pages/Notifications';
import SimpleTable from './features/example/pages/SimpleTable';
import CrudTable from './features/example/pages/CrudTable';
import SelectionTable from './features/example/pages/SelectionTable';
import ExpandTable from './features/example/pages/ExpandTable';

export default function App() {
  const theme = useTheme();

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      <DatesProvider settings={{ locale: 'en', firstDayOfWeek: 1, weekendDays: [0, 6] }}>
        <ModalsProvider modalProps={{ centered: true, size: 'auto' }} labels={{ confirm: 'Confirm', cancel: 'Cancel' }}>
          <Notifications position='bottom-right' />
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Forms />} />
              <Route path='forms' element={<Forms />} />
              <Route path='modals' element={<Modals />} />
              <Route path='notifications' element={<NotificationsExample />} />
              <Route path='table-simple' element={<SimpleTable />} />
              <Route path='table-crud' element={<CrudTable />} />
              <Route path='table-selection' element={<SelectionTable />} />
              <Route path='table-expand' element={<ExpandTable />} />
            </Route>
          </Routes>
        </ModalsProvider>
      </DatesProvider>
    </MantineProvider>
  );
}
