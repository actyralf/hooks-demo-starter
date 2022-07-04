import { useApi } from "../hooks/useApi";

export const RandomUserPage = () => {
  const { data } = useApi({ url: "https://randomuser.me/api/?results=10" });

  return (
    <>
      <h2>RandomUserPage</h2>
      <ul>
        {data
          ? data.results.map((user) => {
              return (
                <li key={user.email}>
                  {user.name.first} {user.name.last}
                </li>
              );
            })
          : null}
      </ul>
    </>
  );
};
