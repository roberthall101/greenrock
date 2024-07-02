import {HeaderMenu} from "../components/HeaderMenu/HeaderMenu";
import { Container } from "@mantine/core";
import {ContactUs} from "@/components/ContactUs/ContactUs";

export default function ContactPage() {
    return (
        <Container size={'100%'}>
            <HeaderMenu />
            <ContactUs />
        </Container>
    );
}
