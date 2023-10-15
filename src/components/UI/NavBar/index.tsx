import { FC, useState } from "react";
import {Flex, Spacer, Button} from '@chakra-ui/react';
import { buttons } from "./utils";

const NavBar = () => {
    const [activeButton, setActiveButton] = useState(buttons[0]);

    return (
        <Flex
            h="5rem"
            w="100%"
            justifyContent="space-around"
            alignItems="center"
        >
            <Spacer />
            {buttons.map((button, i) => (
                <Button
                    key={i}
                    bg="none"
                    className={activeButton === button ? "active" : ""}
                    onClick={() => setActiveButton(button)}
                >
                    {button.label}
                </Button>
            ))}
        </Flex>
    );
};

export { NavBar };