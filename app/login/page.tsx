import Link from "next/link";

export default function login() {
    return(
        <div>
            <p className="text-6xl ml-20 pt-32 pb-10 underlinegreen">Login</p>
            <div>
                <form className="ml-20">
                    <label className="text-2xl">Username:</label>
                    <input className="py-1 px-2 ml-5 bg-grey-100 border-2 border-green-800 focus:border-green-600 rounded-lg mb-5" type="text" id="username" title="username" />
                    <br/>
                    <label className="text-2xl">Password:</label>
                    <input className="py-1 px-2 ml-5 bg-grey-100 border-2 border-green-800 focus:border-green-600 rounded-lg" type="text" id="username" title="username" />
                    <br/>
                    <input className="rounded-full bg-green-700 hover:bg-green-500 py-2 px-4 mt-5 text-xl" type="submit" value="Submit" />
                </form>
            </div>
            <Link href={'/signup'}>
                <p className="text-green-800 ml-20">Dont have an account? Sign up</p>
            </Link>
        </div>
    )
}