import '../styles/Navigation.css';
import { useDisconnect } from 'wagmi'

import { Navbar, Center, Tooltip, UnstyledButton, createStyles, Stack, Image } from '@mantine/core';
import {
  TablerIcon,
  IconHome2,
  IconCoinBitcoin,
  IconBrandDeno,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
  IconLogout,
  IconSwitchHorizontal,
} from '@tabler/icons';

import Kitaro from '../assets/kitaro2.png';




const useStyles = createStyles((theme) => ({
  link: {
    width: 100,
    height: 60,
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    },
  },

  active: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

interface NavbarLinkProps {
  icon: TablerIcon;
  label: string;
  active?: boolean;
  onClick?(): void;
}




function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  const { classes, cx } = useStyles();
  return (
    <Tooltip label={label} position="right" transitionDuration={0}>
      <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
        <Icon stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
    { icon: IconHome2, label: 'Home'},
    { icon: IconCoinBitcoin, label: 'Crypto'},
    { icon: IconBrandDeno, label: 'NFT' },
    { icon: IconUser, label: 'Account' },
    { icon: IconCalendarStats, label: 'Dziennik' },
    
  ];
  interface NavigationProps {
    active: number;
    setActive: (value: number) => void;
  }




function Navigation({active, setActive} : NavigationProps){
  const { disconnect } = useDisconnect()
  console.log("Navigation "+active);
  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index) }
    />
  ));
    return (
      <div className="Navigation">
          <Navbar height={900} width={{ base: 130 }} p="md">
              <Center>
                  <Image src={Kitaro} radius="xl"/>
              </Center>
              <Navbar.Section grow mt={60}>
                  <Stack justify="center" spacing={0}>
                  {links}
                  </Stack>
              </Navbar.Section>
              <Navbar.Section>
                  <Stack justify="center" spacing={0}>
                  <NavbarLink icon={IconSwitchHorizontal} label="Change account" />
                  <NavbarLink icon={IconLogout} label="Logout" onClick={() => disconnect()} />
                  </Stack>
              </Navbar.Section>
              </Navbar>
      </div>
    );
  }

export default Navigation;