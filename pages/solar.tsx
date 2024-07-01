import {HeaderMenu} from "../components/HeaderMenu/HeaderMenu";
import ContactForm from "@/components/ContactForm/ContactForm";
import {Text, Title} from "@mantine/core";

export default function ContactPage() {
    return (
        <>
            <HeaderMenu />
            <Title ta={'center'} order={1}>Solar PV</Title>
            <Title ta={'center'} order={3} m={'lg'}>Electricity from the sun!</Title>
            <Text color="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
                Solar panels are a great way to save on electric and heating bills by converting the energy that is already hitting your roof every single day and turning it into power that you can use for your appliances, hot water and all other electric-consuming devices in your home.
            </Text>
            <Text color="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
                Three One Solar is committed to using industry-leading materials to ensure our customers get the maximum performance from your system over its life span.
            </Text>
            <Title ta={'center'} order={3} m={'lg'}>Enquire today</Title>
            <Text color="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
                If you want to see how much we could save on your bills, get in touch below for a free quote and savings estimate!
            </Text>
        </>
    );
}
