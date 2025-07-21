import { useEffect, useState } from "react";
import { fetchBio } from "./fetchBio";

const Lesson2_2 = () => {
  const [person, setPerson] = useState("ShinCode");
  const [bio, setBio] = useState<string | null>(null);

  useEffect(() => {
    let ignore = false;
    const startFetching = async () => {
      const bio = await fetchBio(person);
      if (ignore) return;
      setBio(bio);
    };

    startFetching();

    return () => {
      ignore = true;
    };
  }, [person]);

  return (
    <div>
      <select onChange={(e) => setPerson(e.target.value)} value={person}>
        <option value="ShinCode">ShinCode</option>
        <option value="TestUser">TestUser</option>
        <option value="SampleUser">SampleUser</option>
      </select>

      <hr />

      <p className="text-black">{bio ?? "Loading..."}</p>
    </div>
  );
};

export default Lesson2_2;
