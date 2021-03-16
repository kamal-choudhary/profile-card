import React from "react";

const ProfileCard = () => {
  return (
    <div className="flex flex-col items-center w-88 h-96 text-lg m-auto my-48 rounded-lg shadow bg-white">
      {/* <div className="h-32 bg-green-500 rounded-full"> */}
      <img
        src="/static/images/bg-pattern-card.svg"
        className="rounded-lg rounded-b-none"
        alt="Victor Image"
      />
      {/* </div> */}
      <img
        src="/static/images/image-victor.jpg"
        className="rounded-full items-center -mt-14 border-4 ring-inset"
        alt="Victor Image"
      />
      <div className="bg-white  mt-8 ">
        <p className="font-bold font-custom ">
          Victor Crest <span className="text-gray-600 ml-2">26</span>
        </p>
        <p className="text-gray-500 ml-8">London</p>
      </div>

      <div className="w-88 border-t-2 flex flex-row justify-between mt-9">
        <div className="px-4 py-2">
          <p className="font-bold">80K</p>
          <p>Followers</p>
        </div>
        <div className="px-4 py-2">
          <p className="font-bold">803K</p>
          <p>Likes</p>
        </div>
        <div className="px-4 py-2">
          <p className="font-bold">1.4K</p>
          <p>Photos</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
