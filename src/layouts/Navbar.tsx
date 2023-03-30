import { Link } from 'react-router-dom';
import { Navbar as MantineNavbar, ScrollArea, NavLink } from '@mantine/core';
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
  IconBulb,
} from '@tabler/icons-react';

type Props = {
  opened: boolean;
};

const navItems = [
  { label: 'Dashboard', icon: IconGauge, link: '/' },
  {
    label: 'Market news',
    icon: IconNotes,
    links: [
      { label: 'Overview', link: '/' },
      { label: 'Forecasts', link: '/' },
      { label: 'Outlook', link: '/' },
      { label: 'Real time', link: '/' },
    ],
  },
  {
    label: 'Releases',
    icon: IconCalendarStats,
    links: [
      { label: 'Upcoming releases', link: '/' },
      { label: 'Previous releases', link: '/' },
      { label: 'Releases schedule', link: '/' },
    ],
  },
  { label: 'Analytics', icon: IconPresentationAnalytics, link: '/' },
  { label: 'Contracts', icon: IconFileAnalytics, link: '/' },
  { label: 'Settings', icon: IconAdjustments, link: '/' },
  {
    label: 'Security',
    icon: IconLock,
    links: [
      { label: 'Enable 2FA', link: '/' },
      { label: 'Change password', link: '/' },
      { label: 'Recovery codes', link: '/' },
    ],
  },
  {
    label: 'Examples',
    icon: IconBulb,
    links: [
      { label: 'Forms', link: '/forms' },
      { label: 'Modals', link: '/modals' },
    ],
  },
];

export default function Navbar({ opened }: Props) {
  return (
    <MantineNavbar width={{ base: 260 }} p='xs' hiddenBreakpoint='sm' hidden={!opened}>
      <MantineNavbar.Section grow component={ScrollArea} mx='-xs' px='xs'>
        {navItems.map(navItem =>
          navItem.link ? (
            <NavLink
              key={navItem.label}
              component={Link}
              to={navItem.link}
              label={navItem.label}
              icon={<navItem.icon size='1.1rem' stroke={1.5} />}
            />
          ) : (
            <NavLink key={navItem.label} label={navItem.label} icon={<navItem.icon size='1.1rem' stroke={1.5} />}>
              {navItem?.links?.map(el => (
                <NavLink key={el.label} component={Link} to={el.link} label={el.label} />
              ))}
            </NavLink>
          )
        )}
      </MantineNavbar.Section>
    </MantineNavbar>
  );
}
