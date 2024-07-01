import {Title, Modal, Button, Center, Image} from '@mantine/core';
import classes from './Welcome.module.css';
import {useState} from "react";

export function Welcome() {
    const [opened, setOpened] = useState(false);
  return (
    <>
        <Image
        src={"https://images.unsplash.com/photo-1625301840055-7c1b7198cfc0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        style={{ height: '25vh', objectPosition: 'center' }}
        radius='md'
        />
        <Title className={classes.title} ta="center" m='md'>
            Your renewable solution
            {/*<Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>*/}
            {/*  GreenRock*/}
            {/*</Text>*/}
        </Title>
        <Center>
            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title="Complete this form!"
            >
            </Modal>
            <Button size={'xl'} variant="filled" className={classes.button} onClick={() => setOpened(true)}>GET A FREE QUOTE + SAVINGS ESTIMATE</Button>
        </Center>
    </>
  );
}
