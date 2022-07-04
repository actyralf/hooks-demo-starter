import { useApi } from "../hooks/useApi";

export const StarWarsPage = () => {
  const { data } = useApi({ url: "https://swapi.dev/api/people" });

  return (
    <>
      <h2>StarWarsPage</h2>
      <ul>
        {data
          ? data.results.map((character) => {
              return <li key={character.url}>{character.name}</li>;
            })
          : null}
      </ul>
    </>
  );
};
