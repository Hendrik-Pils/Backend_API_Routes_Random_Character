import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data, isLoading } = useSWR("/api/random-character", fetcher);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }
  return (
    <ul>
      <li>
        <h1>
          {data.firstName} {data.lastName}
        </h1>

        <p>{data.age}</p>
        <p>{data.twitterName}</p>
        <p>{data.geoHash}</p>
      </li>
    </ul>
  );
}
