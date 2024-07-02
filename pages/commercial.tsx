import {Container, Text, Title} from "@mantine/core";
import {HeaderMenu} from "../components/HeaderMenu/HeaderMenu";
import {ContactUs} from "@/components/ContactUs/ContactUs";

export default function ContactPage() {
    return (
        <Container size={'100%'} >
            <HeaderMenu />

            <Title ta={'center'} order={3} m={'lg'}>Boosting your Business</Title>
            <Text color="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
                Commercial solutions for solar and battery storage have become increasingly practical, enabling businesses to generate and store renewable energy on a significant scale. Solar panels installed on commercial rooftops or dedicated ground areas capture sunlight and convert it into electricity, helping power business operations and decreasing grid dependency. Technological advancements have made these systems more affordable and efficient, while government incentives and rebates further enhance the financial appeal for businesses.
            </Text>
            <Text color="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
                Battery storage systems play a key role in commercial applications by storing surplus energy generated during peak sunlight hours for use during low production periods or times of high energy demand. This ensures a consistent and reliable power supply, even during outages, and can help reduce energy costs by lowering peak demand charges. Integrating solar panels with battery storage in commercial settings not only boosts energy security and operational resilience but also aligns with sustainability objectives by cutting carbon emissions and promoting a transition to a cleaner energy grid.
            </Text>
            <ContactUs />
        </Container>
    );
}
