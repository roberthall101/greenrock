import {
    Menu,
    Group,
    Center,
    Burger,
    Container,
    Drawer,
    Button,
    Stack,
    NavLink,
    Box,
    useMantineColorScheme, Image
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
    IconChevronDown,
    IconHome,
    IconBatteryCharging,
    IconClipboardCheck,
    IconPhone,
    IconSun, IconMoon, IconSolarPanel2, IconBolt, IconHomeBolt, IconBuildingFactory2
} from '@tabler/icons-react';
import classes from './HeaderMenu.module.css';
import {useEffect, useState} from "react";

const links = [
    { link: '/', label: 'Home' },
    {
        label: 'Solutions',
        links: [
            { link: '/solar', label: 'Solar PV' },
            { link: '/battery', label: 'Battery Storage' }
        ],
    },
    {
        label: 'Projects',
        links: [
            { link: '/domestic', label: 'Domestic' },
            { link: '/commercial', label: 'Commercial' },
        ],
    },
    { link: '/contact', label: 'Contact' }
];

export function HeaderMenu() {
    const [opened, { open, close, toggle }] = useDisclosure(false);
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true)
    }, [])

    const items = links.map((link) => {
        const menuItems = link.links?.map((item) => (
            <Menu.Item component="a"
                       href={item.link} key={item.link}>{item.label}</Menu.Item>
        ));

        if (menuItems) {
            return (
                <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
                    <Menu.Target>
                        <a
                            href={link.link}
                            className={classes.link}
                            // onClick={(event) => event.preventDefault()}
                        >
                            <Center>
                                <span className={classes.linkLabel}>{link.label}</span>
                                <IconChevronDown size="0.9rem" stroke={1.5} />
                            </Center>
                        </a>
                    </Menu.Target>
                    <Menu.Dropdown>{menuItems}</Menu.Dropdown>
                </Menu>
            );
        }

        return (
            <a
                key={link.label}
                href={link.link}
                className={classes.link}
                // onClick={(event) => event.preventDefault()}
            >
                {link.label}
            </a>
        );
    });

    return (
        <header className={classes.header}>
                <div className={classes.inner}>
                    <Button variant='transparent' component="a"
                            href="/">

                        <div className={classes.logo}>
                            <Group>
                            <span><Image src={'/gr-logo.png'} w={'auto'} fit={'contain'} h={50}/></span>
                                <div>
                                    <span className={classes.green}>Green</span><span
                                    className={classes.rock}>Rock</span><span
                                    className={classes.green}> Renewables</span>
                                </div>
                            </Group>
                        </div>
                    </Button>
                    {/*<MantineLogo size={28} />*/}
                    <Group gap={5} visibleFrom="sm">
                        {isClient && (colorScheme === 'dark' ? <IconSun onClick={() => toggleColorScheme() } className={classes.lighter} size={18} /> : <IconMoon onClick={() => toggleColorScheme() } className={classes.lighter} size={18} />) }
                        {items}
                    </Group>
                    <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm"/>
                    <Drawer
                        opened={opened}
                        onClose={close}
                        size="50%"
                        position="right"
                    >
                        <NavLink
                            href="/"
                            label="Home"
                            leftSection={<IconHome size="1rem" stroke={1.5} />}
                        />
                        <NavLink
                            href="/solutions"
                            label="Solutions"
                            leftSection={<IconBolt size="1rem" stroke={1.5} />}
                        >
                            <NavLink
                                href="/solar"
                                label="Solar PV"
                                leftSection={<IconSolarPanel2 size="1rem" stroke={1.5} />}
                            />
                                <NavLink
                                    href="/battery"
                                    label="Battery Storage"
                                    leftSection={<IconBatteryCharging size="1rem" stroke={1.5} />}
                                />
                        </NavLink>
                        <NavLink
                            href="/projects"
                            label="Projects"
                            leftSection={<IconClipboardCheck size="1rem" stroke={1.5} />}
                        >
                            <NavLink
                                href="/domestic"
                                label="Domestic"
                                leftSection={<IconHomeBolt size="1rem" stroke={1.5} />}
                            />
                            <NavLink
                                href="/commercial"
                                label="Commercial"
                                leftSection={<IconBuildingFactory2 size="1rem" stroke={1.5} />}
                            />
                        </NavLink>
                        <NavLink
                            href="/contact"
                            label="Contact"
                            leftSection={<IconPhone size="1rem" stroke={1.5} />}
                        />
                        <Drawer.Body style={{ flexGrow: 1 }}>
                            {/* Drawer body content */}
                        </Drawer.Body>
                            <NavLink style={{ position: 'absolute', bottom: '1%' }}
                                onClick={() => toggleColorScheme()}
                                label={colorScheme === 'dark' ? "Light Mode" : "Dark Mode"}
                                leftSection={colorScheme === 'dark' ? <IconSun className={classes.lighter} size="1rem" stroke={1.5}/> : <IconMoon className={classes.lighter} size="1rem" stroke={1.5}/>}
                            />
                    </Drawer>
                </div>
        </header>
    );
}
