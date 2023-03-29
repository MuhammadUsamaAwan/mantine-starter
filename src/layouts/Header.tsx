import {
  Header as MantineHeader,
  MediaQuery,
  Burger,
  useMantineTheme,
  Flex,
  Title,
  ActionIcon,
  Popover,
  Text,
  SimpleGrid,
  Anchor,
  Menu,
  type ColorScheme,
} from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import {
  IconBrandAbstract,
  IconApps,
  IconUserCircle,
  IconCreditCard,
  IconBuildingBank,
  IconRepeat,
  IconReceiptRefund,
  IconReceipt,
  IconReport,
  IconSettings,
  IconPhoto,
  IconMessageCircle,
  IconLogout,
  IconMoon,
  IconSun,
} from '@tabler/icons-react';
import { LOCAL_STORAGE_PREFIX } from '../config/config';

type Props = {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

const apps = [
  { title: 'App 1', icon: IconCreditCard, href: '/' },
  { title: 'App 2', icon: IconBuildingBank, href: '/' },
  { title: 'App 3', icon: IconRepeat, href: '/' },
  { title: 'App 4', icon: IconReceiptRefund, href: '/' },
  { title: 'App 5', icon: IconReceipt, href: '/' },
  { title: 'App 6', icon: IconReport, href: '/' },
];

export default function Header({ opened, setOpened }: Props) {
  const theme = useMantineTheme();
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: `${LOCAL_STORAGE_PREFIX}color-scheme`,
    defaultValue: 'light',
  });

  return (
    <MantineHeader height={{ base: 60 }} p='md'>
      <Flex sx={{ width: '100%', height: '100%' }} align='center' justify='space-between'>
        <Flex align='center' gap='xs'>
          <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
            <Burger opened={opened} onClick={() => setOpened(o => !o)} size='sm' color={theme.colors.gray[6]} />
          </MediaQuery>
          <Flex align='center' gap='xs'>
            <IconBrandAbstract stroke={1.75} size='1.5rem' />
            <Title order={2} weight={600}>
              Starter
            </Title>
          </Flex>
        </Flex>
        <Flex align='center' gap='xs'>
          <Popover width={180} position='bottom-end' shadow='md'>
            <Popover.Target>
              <ActionIcon
                sx={{ color: theme.colorScheme === 'dark' ? theme.white : theme.black }}
                variant='transparent'
              >
                <IconApps stroke={1.75} size='1.5rem' />
              </ActionIcon>
            </Popover.Target>
            <Popover.Dropdown>
              <SimpleGrid cols={2}>
                {apps.map(app => (
                  <Anchor
                    key={app.title}
                    color='inherit'
                    href={app.href}
                    target='_blank'
                    underline={false}
                    sx={{
                      '&:hover': {
                        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
                      },
                      borderRadius: '0.25rem',
                      padding: '0.25rem',
                    }}
                  >
                    <Flex align='center' direction='column'>
                      <app.icon size='1.5rem' stroke={1.75} />
                      <Text align='center' size='sm'>
                        {app.title}
                      </Text>
                    </Flex>
                  </Anchor>
                ))}
              </SimpleGrid>
            </Popover.Dropdown>
          </Popover>
          <Menu shadow='md' width={180} position='bottom-end'>
            <Menu.Target>
              <ActionIcon
                sx={{ color: theme.colorScheme === 'dark' ? theme.white : theme.black }}
                variant='transparent'
              >
                <IconUserCircle stroke={1.75} size='1.5rem' />
              </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Label>User Profile</Menu.Label>
              <Menu.Item icon={<IconSettings size={14} />}>Settings</Menu.Item>
              <Menu.Item icon={<IconMessageCircle size={14} />}>Messages</Menu.Item>
              <Menu.Item icon={<IconPhoto size={14} />}>Gallery</Menu.Item>
              <Menu.Divider />
              <Menu.Item icon={<IconLogout size={14} />}>Logout</Menu.Item>
            </Menu.Dropdown>
          </Menu>
          <ActionIcon
            sx={{ color: theme.colorScheme === 'dark' ? theme.white : theme.black }}
            variant='transparent'
            onClick={() => (colorScheme === 'dark' ? setColorScheme('light') : setColorScheme('dark'))}
          >
            {theme.colorScheme === 'dark' ? (
              <IconSun stroke={1.75} size='1.5rem' />
            ) : (
              <IconMoon stroke={1.75} size='1.5rem' />
            )}
          </ActionIcon>
        </Flex>
      </Flex>
    </MantineHeader>
  );
}
