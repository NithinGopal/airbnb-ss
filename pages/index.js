import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer';
import Header from '../components/Header'
import LargeCard from '../components/LargeCard';
import MediumCard from '../components/MediumCard';
import SmallCard from '../components/SmallCard';

export default function Home({ expoloreData, cardData }) {

  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>

          {/* pull data from a server - API endpoint */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {expoloreData?.map(item => (
              <SmallCard key={item.img} img={item.img} distance={item.distance} location={item.location} />
            ))}
          </div>
        </section>

        <section className='pt-6'>
            <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>

            <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
              {cardData?.map(item => (
                <MediumCard key={item.title} img={item.img} title={item.title} />
              ))}
            </div>
        </section>

        <LargeCard img='https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440' title='The Greatest Outdoors' description='Wishlists curated by Airbnb.' buttonText='Get Inspired' />
      </main>
      
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const expoloreData = await fetch('https://www.jsonkeeper.com/b/8AKC').then(
    (res) => res.json()
  );

  const cardData = await fetch('https://www.jsonkeeper.com/b/P4IW').then((res) => res.json())

  return {
    props : {
      expoloreData,
      cardData
    }
  }
}
