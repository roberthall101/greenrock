import {HeaderMenu} from "../components/HeaderMenu/HeaderMenu";
import {Container, Text, Title} from "@mantine/core";
import {ContactUs} from "@/components/ContactUs/ContactUs";

export default function SolarPage() {
    return (
        <Container size={'100%'} >
            <HeaderMenu />
            <Title ta={'center'} order={1}>Solar PV</Title>
            <Title ta={'center'} order={3} m={'lg'}>Electricity from the sun!</Title>
            <Text color="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
                Solar panels offer an excellent way to reduce your electricity and heating costs by harnessing the energy from sunlight that hits your roof daily, converting it into power for your appliances, hot water, and other electrical devices in your home.
            </Text>
            <Text color="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
                GreenRock Solar is dedicated to utilizing top-quality materials to guarantee our customers achieve optimal performance from their systems over their entire lifespan.
            </Text>
            <Text color="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
                To find out how much you could save on your bills, contact us below for a free quote and savings estimate!
            </Text>
            <ContactUs />
        </Container>
    );
}
