import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Image } from '@geist-ui/react'
// - nice loader
// - links to gen.art site (header)
//

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const Arrow = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z"
      fill="#fff"
    />
  </svg>
)

const OpenSea = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    fill="none"
    viewBox="0 0 100 100"
  >
    <path
      fill="#fff"
      d="M50 0C22.39 0 0 22.39 0 50C0 77.61 22.39 100 50 100C77.61 100 100 77.61 100 50C100 22.39 77.62 0 50 0ZM24.67 51.68L24.88 51.34L37.89 30.99C38.08 30.7 38.53 30.73 38.67 31.05C40.84 35.92 42.72 41.98 41.84 45.75C41.47 47.3 40.44 49.4 39.28 51.34C39.13 51.62 38.97 51.9 38.79 52.17C38.71 52.29 38.57 52.36 38.42 52.36H25.05C24.69 52.36 24.48 51.97 24.67 51.68ZM82.64 58.68C82.64 58.87 82.53 59.03 82.37 59.1C81.36 59.53 77.91 61.12 76.48 63.11C72.82 68.2 70.03 75.48 63.78 75.48H37.72C28.48 75.48 21 67.97 21 58.7V58.4C21 58.16 21.2 57.96 21.45 57.96H35.97C36.26 57.96 36.47 58.22 36.45 58.51C36.34 59.45 36.52 60.42 36.97 61.3C37.83 63.05 39.62 64.14 41.55 64.14H48.74V58.53H41.63C41.27 58.53 41.05 58.11 41.26 57.81C41.34 57.69 41.42 57.57 41.52 57.43C42.19 56.47 43.15 54.99 44.11 53.3C44.76 52.16 45.39 50.94 45.9 49.72C46 49.5 46.08 49.27 46.17 49.05C46.31 48.66 46.45 48.29 46.55 47.93C46.65 47.62 46.74 47.3 46.82 47C47.06 45.96 47.16 44.86 47.16 43.72C47.16 43.27 47.14 42.8 47.1 42.36C47.08 41.87 47.02 41.38 46.96 40.89C46.92 40.46 46.84 40.03 46.76 39.59C46.65 38.94 46.51 38.29 46.35 37.64L46.29 37.39C46.17 36.94 46.06 36.52 45.92 36.07C45.51 34.67 45.05 33.3 44.55 32.02C44.37 31.51 44.17 31.02 43.96 30.54C43.66 29.8 43.35 29.13 43.07 28.5C42.92 28.21 42.8 27.95 42.68 27.68C42.54 27.38 42.4 27.08 42.25 26.79C42.15 26.57 42.03 26.36 41.95 26.16L41.07 24.54C40.95 24.32 41.15 24.05 41.39 24.12L46.89 25.61H46.91C46.92 25.61 46.92 25.61 46.93 25.61L47.65 25.82L48.45 26.04L48.74 26.12V22.86C48.74 21.28 50 20 51.57 20C52.35 20 53.06 20.32 53.56 20.84C54.07 21.36 54.39 22.07 54.39 22.86V27.71L54.98 27.87C55.02 27.89 55.07 27.91 55.11 27.94C55.25 28.04 55.46 28.2 55.72 28.4C55.93 28.56 56.15 28.76 56.41 28.97C56.94 29.4 57.58 29.95 58.27 30.58C58.45 30.74 58.63 30.9 58.8 31.07C59.69 31.9 60.69 32.87 61.65 33.95C61.92 34.26 62.18 34.56 62.45 34.89C62.71 35.22 63 35.54 63.24 35.86C63.57 36.29 63.91 36.74 64.22 37.21C64.36 37.43 64.53 37.66 64.66 37.88C65.06 38.47 65.4 39.08 65.73 39.69C65.87 39.97 66.01 40.28 66.13 40.58C66.5 41.4 66.79 42.23 66.97 43.07C67.03 43.25 67.07 43.44 67.09 43.62V43.66C67.15 43.9 67.17 44.16 67.19 44.43C67.27 45.28 67.23 46.14 67.05 47C66.97 47.36 66.87 47.7 66.75 48.07C66.62 48.42 66.5 48.78 66.34 49.13C66.03 49.84 65.67 50.56 65.24 51.22C65.1 51.47 64.93 51.73 64.77 51.98C64.59 52.24 64.4 52.49 64.24 52.73C64.01 53.04 63.77 53.36 63.52 53.65C63.3 53.95 63.08 54.25 62.83 54.52C62.49 54.93 62.16 55.31 61.81 55.68C61.61 55.92 61.39 56.17 61.16 56.39C60.94 56.64 60.71 56.86 60.51 57.06C60.16 57.41 59.88 57.67 59.64 57.9L59.07 58.41C58.99 58.49 58.88 58.53 58.77 58.53H54.39V64.14H59.9C61.13 64.14 62.3 63.71 63.25 62.9C63.57 62.62 64.98 61.4 66.65 59.56C66.71 59.49 66.78 59.45 66.86 59.43L82.07 55.03C82.36 54.95 82.64 55.16 82.64 55.46V58.68V58.68Z"
    />
  </svg>
)

const GitHub = () => (
  <svg
    width="45"
    height="45"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M16 0C7.16 0 0 7.16 0 16C0 23.08 4.58 29.06 10.94 31.18C11.74 31.32 12.04 30.84 12.04 30.42C12.04 30.04 12.02 28.78 12.02 27.44C8 28.18 6.96 26.46 6.64 25.56C6.46 25.1 5.68 23.68 5 23.3C4.44 23 3.64 22.26 4.98 22.24C6.24 22.22 7.14 23.4 7.44 23.88C8.88 26.3 11.18 25.62 12.1 25.2C12.24 24.16 12.66 23.46 13.12 23.06C9.56 22.66 5.84 21.28 5.84 15.16C5.84 13.42 6.46 11.98 7.48 10.86C7.32 10.46 6.76 8.82 7.64 6.62C7.64 6.62 8.98 6.2 12.04 8.26C13.32 7.9 14.68 7.72 16.04 7.72C17.4 7.72 18.76 7.9 20.04 8.26C23.1 6.18 24.44 6.62 24.44 6.62C25.32 8.82 24.76 10.46 24.6 10.86C25.62 11.98 26.24 13.4 26.24 15.16C26.24 21.3 22.5 22.66 18.94 23.06C19.52 23.56 20.02 24.52 20.02 26.02C20.02 28.16 20 29.88 20 30.42C20 30.84 20.3 31.34 21.1 31.18C24.2763 30.1077 27.0363 28.0664 28.9917 25.3432C30.947 22.6201 31.9991 19.3524 32 16C32 7.16 24.84 0 16 0Z"
      fill="white"
    />
  </svg>
)

export default function Home() {
  const [highestSales, setHighestSales] = useState([])
  const [recentSales, setRecentSales] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const run = async () => {
      const sales = await fetch(
        'https://api.opensea.io/api/v1/assets?collection=gen-art-drop&format=json&limit=12&offset=0&order_by=sale_price&order_direction=desc'
      ).then(r => r.json())
      setHighestSales(sales)
    }
    run()
  }, [])
  useEffect(() => {
    const run = async () => {
      const sales = await fetch(
        'https://api.opensea.io/api/v1/assets?collection=gen-art-drop&format=json&limit=12&offset=0&order_by=sale_date&order_direction=desc'
      ).then(r => r.json())
      setRecentSales(sales)
    }
    run()
  }, [])

  useEffect(() => {
    if (recentSales?.assets?.length && highestSales?.assets?.length) {
      setTimeout(() => {
        setLoading(false)
      }, 750)
    }
  }, [highestSales, recentSales])

  if (loading) {
    return (
      <div className="bg-black text-gray-200 w-full h-screen min-h-screen">
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <img
            src="/gen.art-logo.jpg"
            alt="meeee"
            className="h-36 rounded-full"
          />
        </div>
      </div>
    )
  }

  return (
    <div className="bg-black">
      <Head>
        <title>gen.art sales</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full max-w-7xl m-auto px-6 text-gray-100">
        <div className="sticky top-0 z-50 py-4 px-7 bg-black">
          <Link href={'/'}>
            <div className="cursor-pointer font-bold text-lg text-gray-100 ">
              GEN.ART{' '}
              <span className="text-xs font-normal text-gray-400">sales</span>
            </div>
          </Link>
          {/* <img src="/gen.art-logo2.png" alt="meeee" className="h-6 ml-2 px-4" /> */}
        </div>
        <Sales title={'Highest Sales'} data={highestSales} />
        <Sales title={'Recent Sales'} data={recentSales} />
      </div>

      <footer className="px-14 flex items-center justify-between w-full h-24 border-t border-gray-900">
        <a className="flex items-center" href="https://gen.art" target="_blank">
          <div className="mr-1 text-gray-600">gen.art</div>
          <Arrow />
        </a>
        <a
          className="flex items-center justify-center"
          href="https://twitter.com/DegenEkko"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="text-sm text-gray-600">Created by ekko</div>
          <img src="/ekko.jpg" alt="meeee" className="h-8 ml-2 rounded-full" />
        </a>
      </footer>
    </div>
  )
}

// https://stackoverflow.com/a/7641822/2263032
function prettyDate(time) {
  var date = new Date((time || '').replace(/-/g, '/').replace(/[TZ]/g, ' ')),
    diff = (new Date().getTime() - date.getTime()) / 1000,
    day_diff = Math.floor(diff / 86400)

  if (isNaN(day_diff) || day_diff < 0 || day_diff >= 31) return

  return (
    (day_diff == 0 &&
      ((diff < 60 && 'just now') ||
        (diff < 120 && '1 minute ago') ||
        (diff < 3600 && Math.floor(diff / 60) + ' minutes ago') ||
        (diff < 7200 && '1 hour ago') ||
        (diff < 86400 && Math.floor(diff / 3600) + ' hours ago'))) ||
    (day_diff == 1 && 'Yesterday') ||
    (day_diff < 7 && day_diff + ' days ago') ||
    (day_diff < 31 && Math.ceil(day_diff / 7) + ' weeks ago')
  )
}

function Sales({ title, data }) {
  const [showIndex, setShowIndex] = useState()
  const [loadIndex, setLoadIndex] = useState()
  return (
    <div className="">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-18 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-200">
          {title}
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data?.assets?.map((product, i) => (
            <div key={product.id} className="group relative">
              <div
                onMouseEnter={_ => setShowIndex(i)}
                onMouseLeave={_ => setShowIndex(-1)}
                className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80 lg:aspect-none"
              >
                {/* <SkeletonTheme color="#111" highlightColor="#222">
                  <Skeleton height={600} count={1} />
                </SkeletonTheme> */}
                <img
                  onLoad={_ => setLoadIndex(i)}
                  src={product.image_url}
                  alt={product.description}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
                {showIndex === i ? (
                  <a
                    href={product.permalink}
                    target="_blank"
                    className="text-gray-100 absolute top-2 right-2"
                  >
                    {/* <OpenSea /> */}
                    <Arrow />
                  </a>
                ) : (
                  ''
                )}
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-400">
                    <a href={product.permalink}>{product.name}</a>
                  </h3>
                  <p className="mt-1 text-xs text-gray-500">
                    {prettyDate(product.last_sale.created_date)}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-200">
                    ♦ {product.last_sale.total_price / 1000000000000000000}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
