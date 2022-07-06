import type { NextPage } from 'next'
import Head from 'next/head'
import CSSTable from '../components/CSSTable';
import JSTable from '../components/JSTable';
import { ElementInfo } from '../types';
import styles from '../styles/Home.module.css'

const elements : ElementInfo[] = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon', compound: ['Carbon Nitro', 'Carbon Yttrium Barium', 'Carbon Cerium Barium', 'Carbon Cerium',] },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen', compound: ['Nitrogen Nitrogen', 'Nitrogen Yttrium Barium', 'Nitrogen Cerium Barium', 'Nitrogen Cerium', 'Cerium Nitro', 'Cerium Yttrium Barium', 'Cerium Cerium Barium', 'Cerium Cerium'] },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium', compound: ['Yttrium Yttrium', 'Yttrium Yttrium Barium', 'Yttrium Cerium Barium', 'Yttrium Cerium'] },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium', compound: ['Barium Barium', 'Barium Yttrium Barium', 'Barium Cerium Barium', 'Barium Cerium', 'Barium Yttrium', 'Cerium Yttrium Barium'] },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium', compound: ['Cerium Nitro', 'Cerium Yttrium Barium', 'Cerium Cerium Barium'] },
];

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Code Challenge</title>
        <meta name="description" content="Code Challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Table using CSS
        </h1>

        <CSSTable data={elements} />

        <h1 className={styles.title}>
          Table using JS
        </h1>

        <JSTable data={elements} />
      </main>
    </div>
  )
}

export default Home
