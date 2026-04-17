import { useState } from "react";

export default function App() {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const ratings = [1, 2, 3, 4, 5];

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#141519]">
      {!submitted ? (
        <div className="bg-[#1f2630] w-[600px] p-6 rounded-2xl text-white">
          
          <div className="bg-[#262f38] w-10 h-10 flex items-center justify-center rounded-full mb-6">
            ⭐
          </div>

          <h2 className="text-[22px] font-bold mb-2">
            How did we do?
          </h2>

          <p className="text-[#969fad] text-[14px] mb-6 leading-6">
            Please let us know how we did with your support request. All feedback
            is appreciated to help us improve our offering!
          </p>

          <div className="flex justify-between mb-6">
            {ratings.map((num) => (
              <button
                key={num}
                onClick={() => setSelected(num)}
                className={`w-11 h-11 rounded-full text-[14px] font-bold transition
                ${
                  selected === num
                    ? "bg-white text-black"
                    : "bg-[#262f38] text-[#7c8798] hover:bg-orange-500 hover:text-white"
                }`}
              >
                {num}
              </button>
            ))}
          </div>

          <button
            onClick={() => selected && setSubmitted(true)}
            className={`w-full h-11 rounded-full text-[13px] font-bold tracking-[2px] uppercase transition
            ${
              selected
                ? "bg-orange-500 hover:bg-white hover:text-orange-500"
                : "bg-gray-600 cursor-not-allowed"
            }`}
          >
            Submit
          </button>
        </div>
      ) : (
        <div className="bg-[#1f2630] w-[340px] p-6 rounded-2xl text-center text-white">
          
          <div className="mb-6">📱</div>

          <p className="bg-[#262f38] text-orange-400 text-sm px-4 py-1 rounded-full inline-block mb-6">
            You selected {selected} out of 5
          </p>

          <h2 className="text-[22px] font-bold mb-2">
            Thank you!
          </h2>

          <p className="text-[#969fad] text-[14px] leading-6">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      )}
    </div>
  );
}
