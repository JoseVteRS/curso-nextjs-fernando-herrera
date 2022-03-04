import { Link, Spacer, Text, useTheme } from '@nextui-org/react'
import Image from 'next/image'
import NextLink from 'next/link'
import style from './Navbar.module.css'

export const Navbar = () => {

    const { theme, isDark } = useTheme()

    return (
        <>
            <div
                style={{
                    backgroundColor: theme?.colors.gray900.value
                }}
                className={style.NavbarContainer}>

                <Image
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                    alt="icono de la app"
                    width={70}
                    height={70}
                />
                <NextLink href="/" passHref>
                    <Link>
                        <Text color="white" h2>A</Text>
                        <Text color="white" h3>nimals</Text>
                    </Link>

                </NextLink>


                <Spacer css={{ 'flex': '1' }} />

                <NextLink href={'/favoritos'} passHref>
                    <Link>
                        <Text color="white">Favoritos</Text>
                    </Link>
                </NextLink>

            </div>
        </>
    )
}
