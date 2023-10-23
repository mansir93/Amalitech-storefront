import React from "react";

const Support = () => {
  return (
    <div>
      <div>
        <form>
          <div>
            <textarea className="text-gray-300 min-h-[350px] shadow-md w-[90%] p-2 text-sm">
              Hello Storefront, I would to know about you:
            </textarea>
          </div>
          <div>
            <button className="mt-4 bg-blue-950 text-white text-center py-2 px-10 ">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Support;
