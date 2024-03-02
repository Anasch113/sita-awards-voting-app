import Wrapper from "../wrapper/Wrapper"
import ImagesCaurosel from "./FavouriteCrousel"

const Favourite = () => {
    return (
        <section>
            <Wrapper>
                <div className="flex flex-col justify-center items-center">
                    <h1 className="md:text-3xl text-2xl text-center font-bold text-gold">
                        Vote Your Favourite Team Or Player
                    </h1>
                    <p className="text-sm font-light text-white py-3 text-center">
                        Welcome to the SITA Award Sports Event Voting Portal! As a cornerstone of our commitment to promoting excellence in sports, this platform is dedicated to celebrating and recognizing the outstanding achievements of athletes and teams. Your vote plays a crucial role in honoring the hard work, talent, and spirit of these sports stars.
                    </p>
                    <ImagesCaurosel/>

                </div>
            </Wrapper>
        </section>
    )
}

export default Favourite