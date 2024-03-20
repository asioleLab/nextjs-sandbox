import { Inter, Roboto_Mono, Lusitana } from 'next/font/google'

export const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
})

export const lusitana = Lusitana({
    // subsets: ['latin'],
    display: 'swap',
    weight: ['400', '700'],
    subsets: ['latin']
})

export const roboto_mono = Roboto_Mono({
    subsets: ['latin'],
    display: 'swap',
})