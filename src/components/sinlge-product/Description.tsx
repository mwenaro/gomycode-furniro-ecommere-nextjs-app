import Image from "next/image";

export function Description() {
    return (
        <div className="m-5">
            <hr className="border-t-2 border-gray-300 my-6" />

            {/* Titles */}
            <div className="flex flex-wrap justify-center gap-5 text-zinc-400 m-4 text-center">
                <h3 className="text-black font-bold">Description</h3>
                <h3>Additional Information</h3>
                <h3>Reviews [5]</h3>
            </div>

            {/* Description Text */}
            <div className="text-zinc-500 max-w-4xl mx-auto px-4">
                <p className="my-4">
                    Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
                </p>
                <p>
                    Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
                </p>
            </div>

            {/* Sofa Images */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 my-6 px-4">
                <Image
                    height={348}
                    width={605}
                    src="/images/cosy-three-seater.png"
                    alt="A cosy white three seater sofa"
                    className="w-140 max-w-md"
                />
                <Image
                    height={348}
                    width={605}
                    src="/images/cosy-four-seater.png"
                    alt="A cosy white four seater sofa"
                    className="w-140 max-w-md"
                />
            </div>

            <hr className="border-t-2 border-gray-300 my-6" />
        </div>
    );
}
