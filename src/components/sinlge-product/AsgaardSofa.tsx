import Image from "next/image";

export function AsgaardSofa() {
    return (
        <div className="flex gap justify-center">
            <div>

                {/* small sofa images */}
                <div>
                    <Image height={80} width={76} src="/images/blue-five-seater.png" alt="Blue five seater" className="bg-orange-50 rounded-xl m-5" />
                    <Image height={80} width={76} src="/images/grey-five-seater.png" alt="Grey five seater" className="bg-orange-50 rounded-xl m-5" />
                    <Image height={80} width={76} src="/images/white-two-seater.png" alt="White two seater" className="bg-orange-50 rounded-xl m-5" />
                    <Image height={80} width={76} src="/images/brown-three-seater.png" alt="Brown three seater" className="bg-orange-50 rounded-xl m-5" />
                </div>
            </div>

            {/* big sofa image */}
            <div className="">
                <Image height={500} width={430} src="/images/white-four-seater.png" alt="White four seater" className="bg-orange-50 rounded-xl m-5 md:h-[500px] md:w-[430px]" />
            </div>
            {/* asgaard sofa */}
            <div className="m-5">
                <h2 className="text-black text-4xl font-medium">Asgaard sofa</h2>
                <span className="text-[24px] text-zinc-400 font-medium my-4">Rs. 250,000.00</span>

                {/* rating and reveiw */}
                <div className="flex gap-5 my-3">
                    <Image height={17} width={124} src="/images/rating-stars.png" alt="Rating stars" />
                    <Image height={0} width={1} src="/images/line.png" alt="Grey Line" />
                    <span className="text-xs text-zinc-300 pt-2">5 Customer Review</span>
                </div>

                {/* Description */}
                <p className="text-black text-xs max-w-90">Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>

                {/* sizing */}
                <div className="flex flex-col gap-3">
                    <h3 className="text-sm text-zinc-300 my-2">Size</h3>

                    <div className="flex gap-3">
                        <Image height={30} width={30} src="/images/l-icon.png" alt="L icon" /><Image height={30} width={30} src="/images/xl-icon.png" alt="XL icon" /><Image height={30} width={30} src="/images/xs-icon.png" alt="XS icon" />
                    </div>

                    {/* coloring */}
                    <h3 className="text-sm text-zinc-300">Color</h3>

                    <div className="flex gap-3">
                        <Image height={30} width={30} src="/images/purple-circle.png" alt="Purple circle" /><Image height={30} width={30} src="/images/black-circle.png" alt="Black circle" /><Image height={30} width={30} src="/images/brown-circle.png" alt="Brown circle" />
                    </div>

                    {/* cart */}
                    <div className="my-9">
                        <span className="text-black border border-zinc-300 mr-4 px-6 py-3 rounded-md ">- 1 +</span>
                        <span className="text-black border border-solid-zinc-300 m-4 px-6 py-3 rounded-md ">Add To Cart</span>
                        <span className="text-black border border-solid-zinc-300 m-4 px-6 py-3 rounded-md ">+ Compare</span>

                    </div>
                </div>
                <hr />

                {/* Catergories */}
                <div className="flex flex-col gap-3">
                    <span className="text-zinc-300">SKU       : SS01</span>
                    <span className="text-zinc-300">Catergory : Sofas</span>
                    <span className="text-zinc-300">Tags      : Sofas,Chair,Home,Shop</span>
                    <span className="text-zinc-300 flex gap-4">Share     : <Image height={20} width={20} src="/images/facebook-icon.png" alt="Facebook icon" />
                        <Image height={20} width={20} src="/images/linkedin-icon.png" alt="Linkedin icon" />
                        <Image height={20} width={20} src="/images/x-icon.png" alt="X icon" /></span>
                </div>
            </div>
            <hr />
        </div>
    )
}
