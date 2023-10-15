import { FC, useState } from "react";
import {
    Button,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
} from '@chakra-ui/react'

const DrawerComponent: FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = useState('left')

    return (
        <>
            <Button colorScheme='blue' onClick={onOpen}>
                Open
            </Button>
            <Drawer
                placement={placement}
                onClose={onClose}
                isOpen={isOpen}
            >
                <DrawerOverlay />
                <DrawerContent bg="transparent">
                    <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
                    <DrawerBody>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export { DrawerComponent };