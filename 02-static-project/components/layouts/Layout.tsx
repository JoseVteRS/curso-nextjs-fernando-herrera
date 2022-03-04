import { FC } from "react"
import Head from "next/head"
import { Navbar } from "../ui"
import style from './Layout.module.css'

type LayoutProps = {
    title?: string
}

export const Layout: FC<LayoutProps> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title || 'AnimalesApp'}</title>
                <meta name="author" content="Jose" />
                <meta name="description" content="Información sobre animal YYYYYYYY" />
            </Head>

            <Navbar />

            <main className={style.LayoutContainer} >
                {children}
            </main>

        </>
    )
}
