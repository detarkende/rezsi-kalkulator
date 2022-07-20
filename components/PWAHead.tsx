import Head from "next/head";
import React from "react";

const PWAHead = () => {
    return (
        <>
            <Head>
                <title>Rezsi kalkulátor</title>
                <meta name="description" content="Mennyi lesz a rezsi augusztustól? Mennyivel fog emelkedni a rezsi ára? Ingyenes online kalkulátor. Számolja ki, hogy mennyibe fog kerülni a rezsi (földgáz és áram) augusztustól!" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <link rel="apple-touch-icon" sizes="180x180" href="/pwa/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/pwa/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/pwa/favicon-16x16.png"/>
                <link rel="manifest" href="/pwa/site.webmanifest"/>
                <meta name="theme-color" content="#212529"/>
            </Head>
        </>
    );
 }

export default PWAHead;