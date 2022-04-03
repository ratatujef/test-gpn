export default async () => {
  const ids = [];
  while (ids.length < 200) {
    ids.push(ids.length + 1);
  }
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/[${ids}]/`
  );
  if (res.ok) {
    return res.json().then((data) => data);
  } else console.warn("Request error");
};
