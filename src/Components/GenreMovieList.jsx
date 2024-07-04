import { useRef } from "react";
import GenreList from "../Constant/GenreList";
import MovieList from "./MovieList";
import { useVisible } from "../Hooks/useVisible";

function GenreMovieList() {
  const elementRef = useRef(null);
  const isVisible = useVisible(elementRef);

  return (
    <div>
      {GenreList.genere.map(
        (item, index) =>
          index <= 4 && (
            <div
              key={item.id}
              ref={index === 0 ? elementRef : null}
              className={`p-8 mt-5 px-8 md:px-16 transition-opacity duration-500 ${
                isVisible || index > 0 ? "opacity-100" : "opacity-0"
              }`}
            >
              <h2 className="text-[20px] text-white font-bold mb-4">
                {item.name}
              </h2>
              {isVisible ? (
                <MovieList genreId={item.id} index_={index} />
              ) : (
                <div className="h-32 bg-gray-700 animate-pulse rounded"></div>
              )}
            </div>
          )
      )}
    </div>
  );
}

export default GenreMovieList;
