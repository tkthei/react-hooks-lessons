import { useState } from "react";

const Lesson1_1 = () => {
  const [age, setAge] = useState(0);
  return (
    <div>
      <input type="text" />
      <button
        className="border p-2 rounded-md bg-red-100"
        onClick={() => setAge(age + 1)}
      >
        Add Age
      </button>
      <p>You are {age}</p>
    </div>
  );
};

export default Lesson1_1;
