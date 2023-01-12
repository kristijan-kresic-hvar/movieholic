import { useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import useTMDB from "../../hooks/api/useTMDB";
import styles from "./Home.module.scss";

import Hero from "../../components/Hero/Hero";
import MovieList from "../../components/MovieList/MovieList";
import FilterList from "../../components/FilterList/FilterList";
import FilterItem from "../../components/FilterItem/FilterItem";
import Button from "../../components/Button/Button";

const Home = () => {
  const [activeFilter, setActiveFilter] = useState("movies");

  const { getNowPlayingMovies, getTVShowsAiringToday } = useTMDB();

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["now_playing", activeFilter],
    refetchOnWindowFocus: false,
    queryFn: ({ pageParam = 1 }) =>
      activeFilter === "movies"
        ? getNowPlayingMovies(pageParam)
        : getTVShowsAiringToday(pageParam),
    getNextPageParam: (data) => {
      if (data.page === data.total_pages) return undefined;
      return data.page + 1;
    },
  });

  return (
    <div className={styles.home}>
      <main>
        <Hero
          title="Movieholic"
          subtitle="We make it easy to track your watched movies and tv shows! 😉"
        />
        <div className={styles.home__filter_list}>
          <FilterList>
            <FilterItem
              title="Movies"
              handleClick={() => setActiveFilter("movies")}
              isActive={activeFilter === "movies"}
            />
            <FilterItem
              title="TV Shows"
              handleClick={() => setActiveFilter("tv_shows")}
              isActive={activeFilter === "tv_shows"}
            />
          </FilterList>
        </div>
        <div className={styles.home__movie_list}>
          {data && (
            <MovieList
              title={activeFilter === "movies" ? "Now Playing" : "Airing Today"}
              total={data.pages[0].total_results}
              data={data}
              dataType={activeFilter === "movies" ? "movie" : "tv"}
            />
          )}
        </div>
        {hasNextPage && (
          <div className={styles.home__load_more}>
            <Button onClick={fetchNextPage}>
              {isFetchingNextPage
                ? "Loading more..."
                : hasNextPage
                ? "Load More"
                : "Nothing more to load"}
            </Button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
