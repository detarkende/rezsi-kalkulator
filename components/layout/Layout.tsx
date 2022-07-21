import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { ReactNode } from "react";
import { Container } from "react-bootstrap";
import PWAHead from "../PWAHead";


function Layout({children}: {children: ReactNode}) {
    return (
        <>
            <PWAHead />
            <div id="layout-wrapper">
                <Navbar />
                <main className="py-3">
                    <Container>
                    {children}
                    </Container>
                </main>
                <Footer />
            </div>

            <style jsx>{`
                #layout-wrapper {
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                }
                main {
                    flex-grow: 1;
                }
            `}</style>
        </>
    );
}

export default Layout;