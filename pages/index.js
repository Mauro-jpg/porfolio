import NextLink from 'next/link'
import { 
    Container, 
    Box,
    Heading, 
    Image,
    Button,
    useColorModeValue 
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { Meta } from '../components/work'

const Page = () => {
    return  <Layout>
                <Container>
                    <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500','whiteAlpha.200')} p={3} mb={6} align="center" >
                        Hello I&apos;m a full-stack developer based in Uruguay!
                    </Box>
                    <Box display={{md:'flex'}}>
                        <Box flexGrow={1}>
                            <Heading as="h2" variant="page-title" >
                                Mauro Nievas
                            </Heading>
                            <p>Full-stack developer</p>
                        </Box>
                        <Box flexShrink={0} mt={{base:4, md:0}} ml={{md:6}} align="center">
                            <Image 
                                borderColor="whiteAlpha.800" 
                                borderWidth={2} 
                                borderStyle="solid" 
                                maxWidth="100px" 
                                display="inline-block" 
                                borderRadius="full" 
                                src="/images/mauro.jpeg" 
                                alt="Profile Image"
                                />
                        </Box>
                    </Box>
                    <Section delay={0.1}>
                        <Heading as="h3" variant="section-title">
                            Me
                        </Heading>
                        <Paragraph>
                        As a highly motivated and enthusiastic young computer, I have a strong passion for programming and have been self-taught since the age of 12. Currently, I am pursuing a degree in computer engineering, which has further deepened my knowledge and skills in the field. With over 6 years of experience working with JavaScript and Python, I have a proven track record of successfully developing both backend and frontend applications. I am eager to bring my expertise and passion to a new challenge, where I can continue to grow as a developer and make a meaningful contribution to the company.
                        </Paragraph>
                        <Box align="center" my={4}>
                            <NextLink href="/works">
                                <Button righIcon={<ChevronRightIcon/>} colorScheme="teal">
                                    My porfolio
                                </Button>
                            </NextLink>
                        </Box>
                    </Section>
                    <Section delay={0.2}>
                        <Heading as="h3" variant="section-title">
                            Bio
                        </Heading>
                        <BioSection>
                            <BioYear>2022 - present</BioYear>
                            Worked at <Meta>Antel</Meta> - <i>Web developer</i>
                        </BioSection>
                        <BioSection>
                            <BioYear>2021 - 2022</BioYear>
                            Worked at <Meta>Up show</Meta> - <i>Web developer</i>
                        </BioSection>
                        <BioSection>
                            <BioYear>2018 - 2021</BioYear>
                            Worked at <Meta>Hacknoid</Meta> - <i>sSr developer</i>
                        </BioSection>
                        <BioSection>
                            <BioYear>2017 - 2018</BioYear>
                            Worked at <Meta>Gestion Total</Meta> - <i>Jr developer</i>
                        </BioSection>
                        <BioSection>
                            <BioYear>1996</BioYear>
                            Born in Mercedes, Uruguay.
                        </BioSection>
                    </Section>
                </Container>
            </Layout>
}

export default Page 