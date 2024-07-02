import {HeaderMenu} from "../components/HeaderMenu/HeaderMenu";
import {Container, Text, Title} from "@mantine/core";
import {ContactUs} from "@/components/ContactUs/ContactUs";

export default function ContactPage() {
    return (
        <Container size={'100%'} >
            <HeaderMenu />
            <Title ta={'center'} order={1}>Battery storage</Title>
            <Title ta={'center'} order={3} m={'lg'}>Entry Level Storage Solution</Title>
            <Text color="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
                Installing battery storage alongside solar PV systems offers numerous advantages. Firstly, it promotes energy independence by storing excess solar energy generated during the day for use at night or during cloudy periods. This reduces reliance on the grid, leading to potential cost savings and greater resilience during power outages. Additionally, battery storage optimizes energy usage by allowing homeowners to shift their energy consumption to times when electricity rates are lower. Overall, combining solar PV with battery storage enhances sustainability, lowers electricity bills, and ensures a reliable power source.
            </Text>
            <Text color="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
                This Lithium-ion option provides a compact energy storage solution, ideal if space is limited but you still want to retain the energy generated by your solar PV panels.
            </Text>
            <Title ta={'center'} order={3} m={'lg'}>Off-Grid Solution</Title>
            <Text color="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
                AGM batteries are a favored option for solar storage due to their affordability, reliability, and established technology. They efficiently store energy generated by solar panels, making them a cost-effective choice for both residential and commercial applications. Additionally, AGM batteries are widely available, easy to install, and have a long lifespan with zero maintenance, offering a dependable energy storage solution for solar power systems
            </Text>
            <Text color="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
                This AGM option provides a more affordable way to store your home-generated energy, though it requires more space, making a garage or covered area highly recommended.
            </Text>

            <Title ta={'center'} order={3} m={'xl'}>Get in touch below to get a free savings estimate.</Title>
            <ContactUs />
        </Container>
    );
}
