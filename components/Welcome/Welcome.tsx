import {Title, Modal, Button, Center, Image, Input, InputWrapper, Text} from '@mantine/core';
import classes from './Welcome.module.css';
import {useState} from "react";

export function Welcome() {
    const [opened, setOpened] = useState(false);

    const [energyConsumption, setEnergyConsumption] = useState<number>(0);
    const [cost, setCost] = useState<number>(0);
    const [total, setTotal] = useState<string>('0.00');

    const handleEnergyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;

        // Check if the input value is a valid number
        if (/^\d*\.?\d*$/.test(inputValue)) {
            // Update state with the parsed number value
            setEnergyConsumption(Number(inputValue));
            setTotal((Number(inputValue) * cost/100).toFixed(2));
        }
    };

    const handleCostChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;

        // Check if the input value is a valid number
        if (/^\d*\.?\d*$/.test(inputValue)) {
            // Update state with the parsed number value
            setCost(Number(inputValue));
            setTotal((energyConsumption * Number(inputValue)/100).toFixed(2));
        }
    };

  return (
    <>
        <Image
        src={"https://images.unsplash.com/photo-1625301840055-7c1b7198cfc0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        style={{ height: '25vh', objectPosition: 'center' }}
        radius='md'
        />
        <Title className={classes.title} ta="center" m='md'>
            Renewable Energy Solutions Fueling the Future
            {/*<Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>*/}
            {/*  GreenRock*/}
            {/*</Text>*/}
        </Title>
        <Center>
            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title="See how much you could save!"
                centered
            >
                <InputWrapper label="Quarterly Energy Consumption (in kWh)">
                    <Input
                        value={String(energyConsumption)}
                        onChange={handleEnergyChange}
                        placeholder="Enter energy consumption"
                        type="number"
                        suffix="kWh"
                        min={0}
                        required
                        rightSection={<Text className={classes.kwh}>kWh</Text>}
                    />
                </InputWrapper>
                <InputWrapper label="Cost per kWh (in pence)">
                    <Input
                        value={String(cost)}
                        onChange={handleCostChange}
                        placeholder="Enter cost per unit"
                        type="number"
                        min={0}
                        required
                        rightSection={<Text className={classes.kwh}>p</Text>}
                    />
                </InputWrapper>
                <Text ta={'center'} pt={'sm'}>Your current cost is £{total} per quarter</Text>
            </Modal>
            <Button size={'xl'} variant="filled" className={classes.button} onClick={() => setOpened(true)}>Free Quote & Savings Estimate</Button>
        </Center>
    </>
  );
}
