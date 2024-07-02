import {Container, Text, Title} from "@mantine/core";
import {HeaderMenu} from "../components/HeaderMenu/HeaderMenu";
import {ContactUs} from "@/components/ContactUs/ContactUs";

export default function ContactPage() {
    return (
        <Container size={'100%'} >
            <HeaderMenu />
            <Title ta={'center'} order={3} m={'lg'}>Powering your Home</Title>
            <Text color="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
                Domestic solutions for solar and battery storage have become more accessible and efficient, enabling homeowners to generate and store their own renewable energy. Solar panels installed on rooftops capture sunlight and convert it into electricity, powering household appliances and reducing grid reliance. Advances in technology have made solar panels more affordable and efficient, and government incentives in many regions make the initial investment more attractive.
            </Text>
            <Text color="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
                Battery storage systems complement solar panels by storing excess energy generated during the day for use at night or during cloudy periods. This integration enhances energy independence and ensures a reliable power supply during outages. The combination of solar panels and battery storage supports environmental sustainability by reducing carbon footprints and aiding the transition to a greener energy grid.
            </Text>
            <ContactUs />
        </Container>
    );
}
