import {
    Text,
    Title,
    SimpleGrid,
    TextInput,
    Textarea,
    Button,
    Group,
    ActionIcon,
} from '@mantine/core';
import {IconBrandInstagram, IconBrandFacebook} from '@tabler/icons-react';
import { ContactIconsList } from './ContactIcons';
import classes from './ContactUs.module.css';

const social = [IconBrandFacebook, IconBrandInstagram];

export function ContactUs() {

    const icons = [
        (
            <a href={'https://www.facebook.com'} target="_blank">
                <ActionIcon size={28} className={classes.social} variant="transparent">
                    <IconBrandFacebook size="1.4rem" stroke={1.5} />
                </ActionIcon>
            </a>
        ),
        (
            <a href={'https://www.instagram.com'} target="_blank">
                <ActionIcon size={28} className={classes.social} variant="transparent">
                    <IconBrandInstagram size="1.4rem" stroke={1.5} />
                </ActionIcon>
            </a>
        ),
    ]

    return (
        <div className={classes.wrapper}>
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
                <div>
                    <Title className={classes.title}>Contact us</Title>
                    <Text className={classes.description} mt="sm" mb={30}>
                        Get in touch and we can help find the option to suit you!
                    </Text>

                    <ContactIconsList />

                    <Group mt="xl">{icons}</Group>
                </div>
                <div className={classes.form}>
                    <Text className={classes.formDescription} mt="sm" mb={30}>
                        Send us a message!
                    </Text>
                    <TextInput
                        label="Email"
                        placeholder="your@email.com"
                        required
                        classNames={{ input: classes.input, label: classes.inputLabel }}
                    />
                    <TextInput
                        label="Name"
                        placeholder="John Smith"
                        mt="md"
                        classNames={{ input: classes.input, label: classes.inputLabel }}
                    />
                    <Textarea
                        required
                        label="Your message"
                        placeholder="I want a savings estimate"
                        minRows={4}
                        mt="md"
                        classNames={{ input: classes.input, label: classes.inputLabel }}
                    />

                    <Group justify="center" mt="md">
                        <Button className={classes.control}>Send message</Button>
                    </Group>
                </div>
            </SimpleGrid>
        </div>
    );
}
