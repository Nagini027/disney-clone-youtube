import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";
import MoviesCarousel from "@/components/MoviesCarousel";
import { Button } from "@/components/ui/button";
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/getMovies";

export default async function Home() {
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();

  return (
    <main className="">
      {/* Carousel banner Wrapper */}
      {/* <CarouselBannerWrapper /> */}
      <div className="flex flex-col space-y-2 xl:mt-40">
        <MoviesCarousel movies={upcomingMovies} title="Upcoming" />
        <MoviesCarousel movies={topRatedMovies} title="topRatedMovies" />
        <MoviesCarousel movies={popularMovies} title="Popularmovies" />
      </div>
    </main>
  );
}
