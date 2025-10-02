

const Homepage = () => {
    return (
        <div className=" relative h-screen w-screen bg-[url('/home.jpg')] bg-center bg-cover bg-no-repeat">
            <div className="absolute inset-0 bg-gray-50/10" />
            <div className='w-full flex items-center  font-Montserrat  '>
                <div className="w-[50vw] flex items-center h-[80vh]">
                    <h1 className="text-[6rem] font-suse tracking-widest text-black ">WELCOME!</h1>
                </div>
                <div className="w-[50vw] flex items-center justify-end h-[50vh]">
                    <p className=" w-[30vw] ">Here in <span className="font-bold">Mosary</span> we offer a large list if recipe for your
                    homecooking needs going from healthy meals to appetizing fatty food,we try to add more and more recipe from each region of 
                    the world
                      </p>
                </div>
            </div>
        </div>
    )
}

export default Homepage
