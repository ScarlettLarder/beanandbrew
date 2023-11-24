import Image from "next/image"

export default function Products() {
    return(
        <div>
            <p className="text-6xl text-center py-20 ">Products</p>
            <div className="grid grid-cols-3 mx-auto p-20 gap-10 ">
                    <div className="bg-gray-300 rounded-b-xl rounded-t-3xl">
                        <Image className="rounded-t-2xl rounded-b-xl" width={1000} height={100} alt="wowt" src={"/Placeholder.jpg"}/>
                        <div className="grid grid-cols-2">
                            <div>
                                <p className="pt-3 pl-10 text-3xl">Latte</p>
                                <p className="pb-3 pl-10">3.50£</p>
                            </div>
                        </div>
                    </div>
                <p>gello</p>
                <p>gello</p>
            </div>
        </div>
    )
}