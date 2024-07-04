import marvel from "../assets/Images/marvel.png";
import disney from "../assets/Images/disney.png";
import pixar from "../assets/Images/pixar.png";
import starwar from "../assets/Images/starwar.png";
import nationalG from "../assets/Images/nationalG.png";

import marvelV from "../assets/Videos/marvel.mp4";
import disneyV from "../assets/Videos/disney.mp4";
import pixarV from "../assets/Videos/pixar.mp4";
import starwarV from "../assets/Videos/star-wars.mp4";
import nationalGV from "../assets/Videos/national-geographic.mp4";

function MovieCompany() {
  const MovieCompanyList = [
    { id: 1, image: marvel, video: marvelV },
    { id: 2, image: disney, video: disneyV },
    { id: 3, image: pixar, video: pixarV },
    { id: 4, image: starwar, video: starwarV },
    { id: 5, image: nationalG, video: nationalGV },
  ];

  return (
    <div className="flex gap-2 md:gap-5 p-2 px-5 md:px-16">
      {MovieCompanyList.map((movie) => (
        <div
          key={movie.id}
          className="border-2 border-gray-600 rounded-lg hover:scale-110 transition-all 
          duration-300 ease-in-out cursor-pointer relative shadow-xl shadow-gray-800/80"
        >
          <video
            src={movie.video}
            className="absolute z-0 top-0 rounded-md opacity-0 hover:opacity-50"
            autoPlay
            loop
            muted
            playsInline
          />
          <img src={movie.image} className="w-full z-1 object-cover" loading="lazy" />
        </div>
      ))}
    </div>
  );
}

export default MovieCompany;
