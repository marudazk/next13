"use client";

import { useState } from "react";

export const ProductCounter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button
        className="border border-slate-200"
        onClick={() => setCounter((counter) => counter - 1)}
      >
        -
      </button>
      <input readOnly value={counter} className="border-slate-200 border " />
      <button
        className="border border-slate-200"
        onClick={() => setCounter((counter) => counter + 1)}
      >
        +
      </button>
    </div>
  );
};
