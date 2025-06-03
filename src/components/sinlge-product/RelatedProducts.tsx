
export function RelatedProducts() {
    return (
        <div>
            <hr />

            {/* title */}
            <h2 className="text-black text-3xl font-medium flex justify-center m-15">Related Products</h2>

            {/* images */}
            <div className="flex gap-5 m-4">
                <img src="/images/syltherine.png" alt="Stylish cafe chair" />
                <img src="/images/leviosa.png" alt="Stylish cafe chair" />
                <img src="/images/lolito.png" alt="Luxury big sofa" />
                <img src="/images/respira.png" alt="Outdoor bar table and stool" />
            </div>

            {/* button */}
            <button className="border border-solid-[#B88E2F] text-[#B88E2F] px-9 py-2 block mx-auto mt-5 mb-10">Show More</button>
        </div>
    )
}
