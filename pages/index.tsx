import { Welcome } from '../components/Welcome/Welcome';
import {HeaderMenu} from "../components/HeaderMenu/HeaderMenu";
import {Container} from "@mantine/core";

export default function HomePage() {
    return (
        <Container size={'100%'} >
            <HeaderMenu />
            <Welcome />
        </Container>
    );
}
