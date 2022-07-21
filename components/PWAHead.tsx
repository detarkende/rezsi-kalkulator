import Head from "next/head";
import React from "react";

const PWAHead = () => {
    const title = "Rezsi kalkulátor"
    const description = "Mennyi lesz a rezsi augusztustól? Mennyivel fog emelkedni a rezsi ára? Ingyenes online kalkulátor. Számolja ki, hogy mennyibe fog kerülni a rezsi (földgáz és áram) augusztustól!";

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                
                <title>{title}</title>
                <meta name="description" content={description} />

                <meta property="og:title" content={title} />
                <meta property="og:site_name" content={title}></meta>
                <meta property="og:description" content={description} />
                <meta property="og:url" content="https://rezsi-kalkulator.netlify.app" />
                <meta property="og:type" content="website" />

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