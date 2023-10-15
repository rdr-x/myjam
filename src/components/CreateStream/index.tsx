import { useCreateStream } from "@livepeer/react";
import { useState } from "react";
import {
    Button,
    Input,
    Flex,
    Text,
    Heading
} from "@chakra-ui/react";


const CreateStream = () => {
    const [streamName, setStreamName] = useState<string>('');

    const {
        mutate: createStream,
        data: stream,
        status,
    } = useCreateStream({ name: streamName });

    console.log(stream);

    return (
        <Flex
            dir="column"
            display="inline-flex"
            p="1.6875rem"
            alignItems="flex-start"
            h="21rem"
            w="19rem"
        >
            <Flex display="row" h="auto" w="auto" justifyContent="space-between" gap="1.8125rem">
                <Heading
                    color="#FFF"
                    fontFamily="Poppins"
                    fontSize="1.5rem"
                    fontStyle="normal"
                    fontWeight="600"
                    lineHeight="2.25rem"
                    letterSpacing="0.0285rem"
                >
                    New JAM
                </Heading>
                <Input
                    size="lg"
                    margin=".5 .5rem"
                    placeholder="Stream name"
                    onChange={(e) => setStreamName(e.target.value)}
                />
                <Button
                    size="lg"
                    margin=".5 .5rem"
                    padding=".5rem 1rem"
                    w="100%"
                    borderRadius="2.8125rem"
                    backgroundColor="#EDF2F7 !important"
                    disabled={status === 'loading' || !createStream}
                    onClick={() => createStream?.()}
                >
                    <Flex alignItems="center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                            <path d="M13.0003 16.25C14.7987 16.25 16.2395 14.7983 16.2395 13L16.2503 6.5C16.2503 4.70167 14.7987 3.25 13.0003 3.25C11.202 3.25 9.75033 4.70167 9.75033 6.5V13C9.75033 14.7983 11.202 16.25 13.0003 16.25ZM18.742 13C18.742 16.25 15.9903 18.525 13.0003 18.525C10.0103 18.525 7.25866 16.25 7.25866 13H5.41699C5.41699 16.705 8.36366 19.7492 11.917 20.28V23.8333H14.0837V20.28C17.637 19.76 20.5837 16.705 20.5837 13H18.742Z" fill="#F25555"/>
                        </svg>
                        <Text ml=".5rem">Start JAMin</Text>
                    </Flex>
                </Button>
            </Flex>
            {stream && <div>Stream Key: {stream.streamKey}</div>}
        </Flex>
    );
}

export { CreateStream };