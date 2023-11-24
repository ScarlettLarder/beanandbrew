import Image from "next/image"
import Link from "next/link"
export default function Products() {
    return(
        <div>
            <p className="text-6xl text-center py-20 underlinegreen">Products</p>
            <p className="text-4xl pl-20 pb-5">Coffee Choices:</p>
            <div className="grid grid-cols-3 mx-auto p-10 gap-10 border-t-4 border-b-4 border-green-800 fancyback">
                    <div className="bg-gray-300 rounded-b-xl rounded-t-3xl">
                        <Image className="rounded-t-2xl rounded-b-xl" width={1000} height={100} alt="wowt" src={"/Placeholder.jpg"}/>
                        <div className="grid grid-cols-2">
                            <div>
                                <p className="pt-3 pl-10 text-3xl">Latte</p>
                                <p className="pb-3 pl-10">3.50£</p>
                            </div>
                            <div>
                                <button className="py-2 my-4 bg-orange-500 hover:bg-orange-600 px-3 rounded-2xl right-0">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-300 rounded-b-xl rounded-t-3xl">
                        <Image className="rounded-t-2xl rounded-b-xl" width={1000} height={100} alt="wowt" src={"/Placeholder.jpg"}/>
                        <div className="grid grid-cols-2">
                            <div>
                                <p className="pt-3 pl-10 text-3xl">Latte</p>
                                <p className="pb-3 pl-10">3.50£</p>
                            </div>
                            <div>
                                <button className="py-2 my-4 bg-orange-500 hover:bg-orange-600 px-3 rounded-2xl right-0">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-300 rounded-b-xl rounded-t-3xl">
                        <Image className="rounded-t-2xl rounded-b-xl" width={1000} height={100} alt="wowt" src={"/Placeholder.jpg"}/>
                        <div className="grid grid-cols-2">
                            <div>
                                <p className="pt-3 pl-10 text-3xl">Latte</p>
                                <p className="pb-3 pl-10">3.50£</p>
                            </div>
                            <div>
                                <button className="py-2 my-4 bg-orange-500 hover:bg-orange-600 px-3 rounded-2xl right-0">Add to cart</button>
                            </div>
                        </div>
                    </div>
            </div>
            <p className="text-4xl pl-20 py-10">Baked goods selection:</p>
            <div className="grid grid-cols-3 mx-auto p-10 gap-10 border-t-4 border-b-4 border-green-800 fancyback">
                    <div className="bg-gray-300 rounded-b-xl rounded-t-3xl">
                        <Image className="rounded-t-2xl rounded-b-xl" width={1000} height={100} alt="wowt" src={"/Placeholder.jpg"}/>
                        <div className="grid grid-cols-2">
                            <div>
                                <p className="pt-3 pl-10 text-3xl">Latte</p>
                                <p className="pb-3 pl-10">3.50£</p>
                            </div>
                            <div>
                                <button className="py-2 my-4 bg-orange-500 hover:bg-orange-600 px-3 rounded-2xl right-0">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-300 rounded-b-xl rounded-t-3xl">
                        <Image className="rounded-t-2xl rounded-b-xl" width={1000} height={100} alt="wowt" src={"/Placeholder.jpg"}/>
                        <div className="grid grid-cols-2">
                            <div>
                                <p className="pt-3 pl-10 text-3xl">Latte</p>
                                <p className="pb-3 pl-10">3.50£</p>
                            </div>
                            <div>
                                <button className="py-2 my-4 bg-orange-500 hover:bg-orange-600 px-3 rounded-2xl right-0">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-300 rounded-b-xl rounded-t-3xl">
                        <Image className="rounded-t-2xl rounded-b-xl" width={1000} height={100} alt="wowt" src={"/Placeholder.jpg"}/>
                        <div className="grid grid-cols-2">
                            <div>
                                <p className="pt-3 pl-10 text-3xl">Latte</p>
                                <p className="pb-3 pl-10">3.50£</p>
                            </div>
                            <div>
                                <button className="py-2 my-4 bg-orange-500 hover:bg-orange-600 px-3 rounded-2xl right-0">Add to cart</button>
                            </div>
                        </div>
                    </div>
            </div>
            <p className="text-4xl pl-20 py-10">Hamper Selection:</p>
            <div className="grid grid-cols-3 mx-auto p-10 gap-10 border-t-4 border-b-4 border-green-800 fancyback mb-32">
                    <div className="bg-gray-300 rounded-b-xl rounded-t-3xl">
                        <Image className="rounded-t-2xl rounded-b-xl" width={1000} height={100} alt="wowt" src={"/Placeholder.jpg"}/>
                        <div className="grid grid-cols-2">
                            <div>
                                <p className="pt-3 pl-10 text-3xl">Latte</p>
                                <p className="pb-3 pl-10">3.50£</p>
                            </div>
                            <div>
                                <button className="py-2 my-4 bg-orange-500 hover:bg-orange-600 px-3 rounded-2xl right-0">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-300 rounded-b-xl rounded-t-3xl">
                        <Image className="rounded-t-2xl rounded-b-xl" width={1000} height={100} alt="wowt" src={"/Placeholder.jpg"}/>
                        <div className="grid grid-cols-2">
                            <div>
                                <p className="pt-3 pl-10 text-3xl">Latte</p>
                                <p className="pb-3 pl-10">3.50£</p>
                            </div>
                            <div>
                                <button className="py-2 my-4 bg-orange-500 hover:bg-orange-600 px-3 rounded-2xl right-0">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-300 rounded-b-xl rounded-t-3xl">
                        <Image className="rounded-t-2xl rounded-b-xl" width={1000} height={100} alt="wowt" src={"/Placeholder.jpg"}/>
                        <div className="grid grid-cols-2">
                            <div>
                                <p className="pt-3 pl-10 text-3xl">Latte</p>
                                <p className="pb-3 pl-10">3.50£</p>
                            </div>
                            <div>
                                <button className="py-2 my-4 bg-orange-500 hover:bg-orange-600 px-3 rounded-2xl right-0">Add to cart</button>
                            </div>
                        </div>
                    </div>
            </div>

            <div className='bottomback py-10 border-t-4 border-orange-400 justify-between flex'>
                <div className='flex '>
                <h2 className='text-xl block mx-3'>Bean and Brew</h2>
                <div className='grid grid-cols-2 justify-between '>
                    <Link href='/products'>
                    <li>Products</li>
                    </Link>
                    <Link href={'/pick-up'}>
                    <li>Pick-up's</li>
                    </Link>
                    <Link href={'/booking'}>
                    <li>booking</li>
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

        </div>
    )
}