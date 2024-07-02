import { Welcome } from '../components/Welcome/Welcome';
import {HeaderMenu} from "../components/HeaderMenu/HeaderMenu";
import {Container} from "@mantine/core";
import {PhotoCarousel} from "@/components/Carousel/Carousel";

export default function HomePage() {
    return (
        <Container size={'100%'} >
            <HeaderMenu />
            <Welcome />
            <PhotoCarousel />
        </Container>
    );
}
