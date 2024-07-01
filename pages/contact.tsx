import {HeaderMenu} from "../components/HeaderMenu/HeaderMenu";
import ContactForm from "@/components/ContactForm/ContactForm";
import { Container, Text, Title} from "@mantine/core";

export default function ContactPage() {
    return (
        <Container size={'100%'}>
            <HeaderMenu />
            <Title ta="center">Contact us</Title>
            <Text color="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
                Drop us a line and we'll get back to you!
            </Text>
            <ContactForm />
            <Text color="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
                Better yet give us a call!
            </Text>
            <Text color="dimmed" ta="center" size="md" mx="auto" mt="xl">
                We love talking to our customers, so feel free to call during normal business hours.
            </Text>
            <Text ta="center" size="lg" mx="auto" mt="xl">
                GreenRock Ltd - 028 43440431
            </Text>
        </Container>
    );
}
