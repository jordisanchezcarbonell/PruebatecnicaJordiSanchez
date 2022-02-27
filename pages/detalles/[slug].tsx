import { Text, Flex, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import {
  NextPage,
  GetStaticPaths,
  GetStaticProps,
  GetServerSideProps,
} from "next";
import { Image } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/react";
import Head from "next/head";

import {
  Box,
  Container,
  Stack,
  VStack,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { Post } from "../interfaces/post";

const DetallesPosts: NextPage<Post> = (props) => {
  const router = useRouter();

  const { slug } = router.query;

  return (
    <Container maxW={"7xl"}>
      <Head>
        <title>{props.titular}</title>
        <meta
          name="description"
          content={`Learn more about ${props.titular}`}
        />
        <meta property="og:title" content={props.titular} />
        <meta property="og:description" content={props.titular} />
        <meta property="og:url" content={`/detalles/${props.slug}`} />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack direction="row" spacing={4} marginTop="15">
        <Link href="/posts">
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
      <SimpleGrid
        columns={{ base: 1, lg: 1 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={props.imagen}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={500}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {props.titular}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"3xl"}
              marginTop="5"
            >
              {props.fechaDePublicacion}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 6, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text fontSize={"lg"}>{props.detalle}</Text>
            </VStack>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;

  const { slug } = params;
  const res = await fetch(
    "https://strapi.eunoia.es/uploads/noticias_78462d94b6.json"
  );
  const posts = await res.json();
  const post = posts.find((x: any) => x.slug === slug);

  return {
    props: {
      titular: post.titular,
      slug: post.titular,
      keywords: post.keywords,
      fechaDePublicacion: post.fechaDePublicacion,
      imagen: post.imagen,
      detalle: post.detalle,
    },
  };
};
export default DetallesPosts;
