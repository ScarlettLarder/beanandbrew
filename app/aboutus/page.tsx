import Image from "next/image"

export default function AboutUs() {
    return(
        <div>
            <div className="grid grid-cols-2">
                <div>
                    <h2 className="text-6xl pt-20 ml-10 underlinegreen">About us</h2>
                    <br/>
                    <p className="px-10 text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/> <br/> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div>   
                    <div className='mx-auto py-10 hover:scale-105 duration-150'>
                        <Image alt='wow' height={600} width={600} src={"/beep boop.jpg"} className='rounded-xl' />
                    </div>
                </div>
            </div>
        </div>
    )
}