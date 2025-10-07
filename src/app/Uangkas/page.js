import Link from "next/link";

const Navbar = () => {

    return (
        <>
        <nav className="bg-green-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px8">
                <div className="flex items-center justify-between h-25">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                           <Link href="/" className="text-lime-100 font-extrabold h-15">AZZAALAND</Link>
                        </div>
                    </div>
            <div className=" flex items-center justify-between ">
                < div className="ml-4 flex items-center text-lime-100 font-bold">About</div>
                < div className="ml-4 flex items-center text-lime-100 font-bold">Video</div>
                < div className="ml-4 flex items-center text-lime-100 font-bold">Aku</div>
            </div>
                </div>
            </div>
        </nav>
      </>
      );
};


export default Navbar;