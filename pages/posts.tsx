import NextLink from "next/link";
import { Link, Flex, Box, Heading } from "@chakra-ui/react";
import { NextPage, GetStaticProps } from "next";
import { ArrowBackIcon, EmailIcon, WarningIcon } from "@chakra-ui/icons";
import {
  Image,
  Divider,
  useColorModeValue,
  Container,
  chakra,
  Stack,
  Button,
} from "@chakra-ui/react";
import Head from "next/head";

import { Post } from "./interfaces/post";
const Posts: NextPage<{
  posts: Post[];
}> = (props) => {
  return (
    <Container maxW={"7xl"} p="12">
      <Head>
        <title>Todo los articulos</title>
        <meta name="description" content="todo los articulos" />
        <meta property="og:title" content="todo los articulos" />
        <meta property="og:description" content="todo los articulos" />
        <meta property="og:url" content="/posts" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack direction="row" spacing={4} marginTop="15">
        <Link href="/">
          <Button
            leftIcon={<ArrowBackIcon />}
            rounded={"full"}
            px={6}
            colorScheme={"orange"}
            bg={"orange.400"}
            _hover={{ bg: "orange.500" }}
          >
            Go back
          </Button>
        </Link>
      </Stack>
      <Heading as="h2" marginTop="5">
        Latest articles {props.posts.length}
      </Heading>
      <Divider marginTop="5" />

      {props.posts.map((x) => {
        return (
          <Flex
            bg={useColorModeValue("#F9FAFB", "gray.600")}
            p={50}
            w="full"
            alignItems="center"
            justifyContent="center"
            float="left"
            key={x.slug}
          >
            <Box
              mx="auto"
              rounded="lg"
              shadow="md"
              bg={useColorModeValue("white", "gray.800")}
              maxW="2xl"
            >
              <Image
                transform="scale(1.0)"
                src={x.imagen}
                alt="some text"
                objectFit="contain"
                transition="0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.05)",
                }}
                roundedTop="lg"
                w="full"
              />

              <Box p={6}>
                <Box>
                  <chakra.span
                    fontSize="xs"
                    textTransform="uppercase"
                    color={useColorModeValue("brand.600", "brand.400")}
                  >
                    {x.fechaDePublicacion}
                  </chakra.span>
                  <NextLink
                    as={`/detalles/${x.slug}`}
                    href={`/detalles/[slug]`}
                    passHref
                    key={`/detalles/${x.slug}`}
                  >
                    <Link
                      display="block"
                      color={useColorModeValue("gray.800", "white")}
                      fontWeight="bold"
                      fontSize="2xl"
                      mt={2}
                      _hover={{ color: "gray.600", textDecor: "underline" }}
                    >
                      {x.titular}
                    </Link>
                  </NextLink>
                </Box>
              </Box>
            </Box>
          </Flex>
        );
      })}
    </Container>
  );
};
// This function gets called at build time
export const getStaticProps: GetStaticProps = async () => {
  // Call an external API endpoint to get posts
  const res = await fetch(
    "https://strapi.eunoia.es/uploads/noticias_78462d94b6.json"
  );
  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
};

export default Posts;
