import { Welcome } from '../components/Welcome/Welcome';
import {HeaderMenu} from "../components/HeaderMenu/HeaderMenu";
import {Container, Grid, Image, Title} from "@mantine/core";
import classes from "@/components/Welcome/Welcome.module.css";

export default function HomePage() {
    return (
        <Container size={'100%'} >
            <HeaderMenu />
            <Welcome />
            <Container size={'100%'} style={{padding: '2rem' }}>
                <Grid align="center" justify="center" style={{ height: '100px', flexWrap: 'nowrap' }}>
                    <Grid.Col span={3}>
                        <Image
                            src={"https://www.electricaltimes.co.uk/wp-content/uploads/2021/01/napit-logo-1-1.png"}
                            style={{ maxHeight: '50%', maxWidth: '100%', objectFit: 'contain', marginLeft: 'auto', marginRight: 'auto'}}
                        />
                    </Grid.Col>
                    <Grid.Col span={3} style={{ textAlign: 'center' }}>
                        <Image
                            src={"https://finn-geotherm.co.uk/wp-content/uploads/2020/08/MCSCertifiedMark_BLACK_RGB-480x0-c-1.png"}
                            style={{ maxHeight: '30%', maxWidth: '75%', objectFit: 'contain', marginLeft: 'auto', marginRight: 'auto' }}
                        />
                    </Grid.Col>
                    <Grid.Col span={3}>
                        <Image
                            src={"https://assets-global.website-files.com/6400abb805882cddc12c64da/64341fd691ae303c05650d08_RECCcertSVG.webp"}
                            style={{ maxHeight: '50%', maxWidth: '100%', objectFit: 'contain', marginLeft: 'auto', marginRight: 'auto' }}
                        />
                    </Grid.Col>
                    <Grid.Col span={3}>
                        <Image
                            src={"https://www.solutionsmobility.co.uk/wp-content/uploads/2022/01/tsi-approved-logo-transparent-white.png"}
                            style={{ maxHeight: '50%', maxWidth: '100%', objectFit: 'contain', marginLeft: 'auto', marginRight: 'auto' }}
                        />
                    </Grid.Col>
                </Grid>
            </Container>
            <Title className={classes.title} ta="center" m='md'>
                Keep up with the team...
            </Title>
        </Container>
    );
}
