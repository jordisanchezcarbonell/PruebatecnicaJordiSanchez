import type { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/Home.module.css";
import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Container,
  Link,
  Stack,
  Text,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
const Home: NextPage = () => {
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Prueba tecnica{" "}
          <Text as={"span"} color={"orange.400"}>
            Jordi Sánchez
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"} textAlign="justify">
          Esta prueba esta hecha con NETXJS con typescript , con chakra-ui. Soy
          Jordi Sánchez y estoy como developer en Ogilvy.
        </Text>
        <Stack spacing={6} direction={"row"}>
          <Link href="/posts">
            <Button
              rounded={"full"}
              px={6}
              colorScheme={"orange"}
              bg={"orange.400"}
              _hover={{ bg: "orange.500" }}
            >
              Get started
            </Button>
          </Link>
        </Stack>
        <Flex w={"full"}></Flex>
      </Stack>
      <Center py={6}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: "100%", md: "540px" }}
          height={{ sm: "476px", md: "20rem" }}
          direction={{ base: "column", md: "row" }}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          padding={4}
        >
          <Flex flex={1} bg="blue.200">
            <Image
              objectFit="cover"
              boxSize="100%"
              src={
                "https://media-exp1.licdn.com/dms/image/C4E03AQG5IyTXT1sGMw/profile-displayphoto-shrink_200_200/0/1516855720698?e=1651104000&v=beta&t=rhYV84g84EOU0vZ8xoAI8Xcybs-w5WfCYdYb3EWexes"
              }
            />
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={2}
          >
            <Heading fontSize={"2xl"} fontFamily={"body"}>
              Jordi Sánchez
            </Heading>
            <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
              @BT_Kazukun
            </Text>
            <Text
              textAlign={"center"}
              color={useColorModeValue("gray.700", "gray.400")}
              px={3}
            >
              Developer en Ogilvy
            </Text>
            <Text
              textAlign={"center"}
              color={useColorModeValue("gray.700", "gray.400")}
              px={3}
            >
              I love angular ❤
            </Text>
            <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue("gray.50", "gray.800")}
                fontWeight={"400"}
              >
                #Lider
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue("gray.50", "gray.800")}
                fontWeight={"400"}
              >
                #Deporte
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue("gray.50", "gray.800")}
                fontWeight={"400"}
              >
                #Artes marciales
              </Badge>
            </Stack>
          </Stack>
        </Stack>
      </Center>
    </Container>
  );
};

export default Home;
