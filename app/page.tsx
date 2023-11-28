import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div className='grid grid-cols-2 mb-10 background py-10 '>
        <div className='my-30 ml-32 flex justify-center items-center'>
          <div className=''>
            <p className='text-5xl'>Try out the seasonal</p>
            <span className='text-8xl mb-5 block colourtext font-extrabold'>Pumpkin Spice <p className='block inline-block colourtext'>Latte</p></span>
            <button className='hover:scale-105 duration-150 bg-gradient-to-r from-orange-500 hover:from-orange-400 to-amber-600 hover:to-amber-500 text-3xl text-light  py-3 px-5 rounded-full'>Find out more</button>
          </div> 
        </div>
        <div className='mx-auto py-10 hover:scale-105 duration-150'>
          <Image alt='wow' height={600} width={600} src={"/beep boop.jpg"} className='rounded-xl' />
        </div>
      </div>
      <div>
        <Image alt='swishy' height={100} width={1500} src={'swishy thingy.svg'} className='mx-auto'/>
      </div>
      <div className='grid grid-cols-2 py-20 mx-24'>
        <div className='flex justify-center items-center'>
          <div className='mx-20'>
            <p className='text-5xl'>Baking lessons available!</p>
            <p className='text-2xl text-gray-800'>Check out our baking lessons to gain knowledge and the satification of creating bread and other baked goods.</p>
            <button className='hover:scale-105 duration-150 my-3 bg-gradient-to-r from-orange-500 hover:from-orange-400 to-amber-600 hover:to-amber-500 text-3xl text-light  py-3 px-5 rounded-full'>Find out more</button>
          </div>
        </div>
        <div>
          <Image alt='ciminmon' width={500} height={500} src={"/cinimon.jpg"} className='rounded-xl mx-auto py-30 hover:scale-105 duration-150'/>
        </div>
      </div>
      <div className='bottomback py-10 border-t-4 border-orange-400 justify-between flex'>
        <div className='flex '>
          <h2 className='text-xl block mx-3'>Bean and Brew</h2>
          <div className='grid grid-cols-2 justify-between '>
            <Link href='/products'>
              <li>Products</li>
            </Link>
            <Link href={'/booking'}>
              <li>Booking</li>
            </Link>
            <Link href={'/baking'}>
              <li>Baking lessons</li>
            </Link>
            <Link href={'/sustainability'}>
              <li>Sustainability</li>
            </Link>
            <Link href={'/aboutus'}>
              <li>About us</li>
            </Link>
            <Link href={'/login'}>
              <li>Login and Sign-up</li>
            </Link>
          </div>
        </div>
        <div className='block'>
          <span className='flex'>
          <div>
            <button className='hover:scale-105 duration-150 bg-gradient-to-r from-orange-500 hover:from-orange-400 to-amber-600 hover:to-amber-500 text-xl text-light  py-2 px-5 rounded-full'>Back to the top</button>
          </div>
          <div>
            <Image className='mx-5 ' width={50} height={50} alt='insta' src={"/Instagram_Glyph_Gradient.png"} />
          </div>
          </span>
        </div>
      </div>
    </main>
  )
}
