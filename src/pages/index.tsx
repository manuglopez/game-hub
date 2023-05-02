import Head from 'next/head'
import {Grid, GridItem, Show} from "@chakra-ui/react";
import NavBar from "@/components/NavBar";


export default function Home() {
    return (
        <>
            <Head>
                <title>Game Hub App</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <Grid templateAreas={
                    {
                        base: `"nav" "main"`,
                        lg: `"nav nav" "aside main"`
                    }
                }>
                    <GridItem area='nav' >
                        <NavBar/>
                    </GridItem>
                    <Show above='lg'>
                        <GridItem area='aside'>Aside</GridItem>
                    </Show>
                    <GridItem area='main' >Main</GridItem>
                </Grid>
            </main>
        </>
    )
}
