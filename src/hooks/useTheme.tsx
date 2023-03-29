import { useLocalStorage } from '@mantine/hooks';
import { type ColorScheme } from '@mantine/core';
import { LOCAL_STORAGE_PREFIX } from '../config/config';

export default function useTheme() {
  const [value] = useLocalStorage<ColorScheme>({
    key: `${LOCAL_STORAGE_PREFIX}color-scheme`,
    defaultValue: 'light',
  });

  const theme = {
    colorScheme: value,
    black: '#22252c',
  };

  return theme;
}
