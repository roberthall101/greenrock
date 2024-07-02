import { Container } from "@mantine/core";
import {HeaderMenu} from "../components/HeaderMenu/HeaderMenu";
import {ContactUs} from "@/components/ContactUs/ContactUs";

export default function ContactPage() {
    return (
        <Container size={'100%'} >
            <HeaderMenu />
            <ContactUs />
        </Container>
    );
}
