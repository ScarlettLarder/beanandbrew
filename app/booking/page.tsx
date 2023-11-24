export default function login() {
    return(
        <div>
            
            <div>
                <p className="text-6xl ml-20 pt-32 pb-10 underlinegreen">Booking selections:</p>
                <form className="ml-20"> 
                <label className="flex text-2xl" htmlFor="shop">Choose a resturant to have your lesson inside:</label>
                <select className="py-1 px-2 ml-5 bg-grey-100 border-2 border-green-800 focus:border-green-600 rounded-lg" id="shop" name="shop">
                    <option value="Big">Big Shop</option>
                    <option value="Baked">Baked goods good</option>
                    <option value="nice">Nice bread</option>
                    <option value="loaf">Loaf</option>
                </select>
                <label className="flex text-2xl" htmlFor="typeof">What type of baking lesson do you want?</label>
                <select className="py-1 px-2 ml-5 bg-grey-100 border-2 border-green-800 focus:border-green-600 rounded-lg" id="typeof" name="typeof">
                    <option value="Classic">Classic Loaf</option>
                    <option value="Sour">Sourdough Loaf</option>
                    <option value="Red">Red velvet Cake</option>
                    <option value="Choco">Chocolate Cupcake</option>
                </select>
                <br/>
                <label className="flex text-2xl" htmlFor="datemin">What time would you like you baking lesson for?</label>
                <input className="py-1 px-2 ml-5 bg-grey-100 border-2 border-green-800 focus:border-green-600 rounded-lg" type="datetime-local" id="datemin" name="datemin" min="2000-01-02"/>
                <br/>
                <input className="rounded-full bg-green-700 hover:bg-green-500 py-2 px-4 mt-5 text-xl" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}