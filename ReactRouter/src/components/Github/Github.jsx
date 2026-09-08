
import { useEffect, useState } from "react";

export default function Github() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://api.github.com/users/hiteshchoudhary")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="text-center m-4 bg-gray-400 text-white p-4 text-4xl">
      Github Followers: {data.followers}
    </div>
  );
}

