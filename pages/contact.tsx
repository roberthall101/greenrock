import {HeaderMenu} from "../components/HeaderMenu/HeaderMenu";
import ContactForm from "@/components/ContactForm/ContactForm";
import { Container, Text, Title} from "@mantine/core";
import {ContactUs} from "@/components/ContactUs/ContactUs";

export default function ContactPage() {
    return (
        <Container size={'100%'}>
            <HeaderMenu />
            {/*<Title ta="center">Contact us</Title>*/}
            {/*<Text color="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">*/}
            {/*    Get in touch and we can help find the option to suit you!*/}
            {/*</Text>*/}
            {/*<ContactForm />*/}
            {/*<Text color="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">*/}
            {/*    Better yet give us a call!*/}
            {/*</Text>*/}
            {/*<Text color="dimmed" ta="center" size="md" mx="auto" mt="xl">*/}
            {/*    You can also give us a call or send an email*/}
            {/*</Text>*/}
            {/*<Text ta="center" size="lg" mx="auto" mt="xl">*/}
            {/*    GreenRock Ltd - 028 12345678*/}
            {/*</Text>*/}
            {/*<Text ta="center" size="lg" mx="auto" mt="xl">*/}
            {/*    info@greenrock.co.uk*/}
            {/*</Text>*/}
            <ContactUs />
        </Container>
    );
}
