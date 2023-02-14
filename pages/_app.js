import { ChakraProvider } from "@chakra-ui/react";
import Layout from '../components/layouts/main';
import Fonts from "../components/fonts";
import theme from '../libs/theme';
import { AnimatePresence } from "framer-motion";
import './global.css'

const Website = ({ Component, pageProps, router}) => {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Layout router={router}>
                <AnimatePresence exitBeforeEnter initial={true}>
                    <Component {...pageProps} key={router.rute} />
                </AnimatePresence>
             </Layout>
        </ChakraProvider>
    )  
}

export default Website; 