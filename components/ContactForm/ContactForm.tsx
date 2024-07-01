import React from 'react';
import { useForm } from '@mantine/form';
import {TextInput, Textarea, Button, Box, Container, Center} from '@mantine/core';
import classes from "../Welcome/Welcome.module.css";

const ContactForm = () => {
    const form = useForm({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            message: '',
        },

        validate: {
            name: (value) => (value.length < 2 ? 'Name must have at least 2 characters' : null),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            phone: (value) => (/^\+?(\d.*){3,}$/.test(value) ? null : 'Invalid phone number'),
            message: (value) => (value.length === 0 ? 'Message cannot be empty' : null),
        },
    });

    const handleSubmit = (values: any) => {
        // Handle form submission, e.g., send data to a server
        console.log(values);
    };

    return (
        <Container>
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <TextInput
                    label="Name"
                    placeholder="Your name"
                    {...form.getInputProps('name')}
                />
                <TextInput
                    mt="md"
                    label="Email"
                    placeholder="your.email@example.com"
                    {...form.getInputProps('email')}
                />
                <TextInput
                    mt="md"
                    label="Phone"
                    placeholder="Your phone number"
                    {...form.getInputProps('phone')}
                />
                <Textarea
                    mt="md"
                    label="Message"
                    placeholder="Your message"
                    {...form.getInputProps('message')}
                />
                <Center>
                    <Button variant="filled" mt="md" type="submit" className={classes.button}>
                        Send Message
                    </Button>
                </Center>
            </form>
        </Container>
    );
};

export default ContactForm;
