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
    <div className="mx-10 my-5">
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center">
          <label className="px-2 py-1 mr-2 font-bold border-2 border-gray-300 rounded-md">
            Enter Amperage or Name:
          </label>
          <input
            type="text"
            value={userInput}
            onChange={(e) => {
              setUserInput(e.target.value);
            }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5 "
          />
        </div>
        <div className="flex justify-center my-3">
          <button
            type="submit"
            className="px-4 py-2 mx-2 font-bold text-black bg-white border-2 border-gray-300 rounded hover:bg-gray-300"
          >
            Apply Filter
          </button>
        </div>
      </form>
    </div>
  );
};

export default Filter;
