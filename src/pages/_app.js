import RootLayout from "../app/layout";

export default function AppRootPage({ Component, pageProps }) {
    return (
        <>
            <RootLayout>
                <Component {...pageProps} />
            </RootLayout>
        </>
    );
}