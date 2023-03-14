import { useState } from "react";

const Filter = ({ filterDesiredAmps }) => {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userInput) {
      filterDesiredAmps(userInput);
    } else if (userInput == "") {
      filterDesiredAmps(userInput);
    }
    setUserInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="text-xl ">Enter Maximum Amperage:</label>
        </div>
        <input
          type="text"
          value={userInput}
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <div className="flex justify-center my-3">
          <button
            type="submit"
            className="px-4 py-2 mx-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          >
            Apply Filter
          </button>
        </div>
      </form>
    </div>
  );
};

export default Filter;
