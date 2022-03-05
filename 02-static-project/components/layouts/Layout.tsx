import { FC } from "react";
import Head from "next/head";
import { Navbar } from "../ui";
import style from "./Layout.module.css";


type LayoutProps = {
    title?: string;
};

const origin = (typeof window === "undefined") ? '' : window.location.origin;

export const Layout: FC<LayoutProps> = ({ children, title }) => {


    return (
        <>
            <Head>
                <title>{title || "AnimalesApp"}</title>
                <meta name="author" content="Jose" />
                <meta
                    name="description"
                    content="Información sobre animal YYYYYYYY"
                />

                <meta
                    property="og:title"
                    content={`Información sobre el pokemon ${title}`}
                />
                <meta
                    property="og:description"
                    content={`Esta es la página sobre toda la información del pokemon ${title}`}
                />
                <meta property="og:image" content={ `${origin}/img/banner.png+`} />
            </Head>

            <Navbar />

            <main className={style.LayoutContainer}>{children}</main>
        </>
    );
};
