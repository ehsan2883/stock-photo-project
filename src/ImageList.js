import React from "react";

const ImageList = ({ ...item }) => {
  const { alt_description: desc, likes } = item;
  const { small: image } = item.urls;
  const { html } = item.user.links;
  const { small: avatar } = item.user.profile_image;
  const { first_name: name } = item.user;
  return (
    <div className="group m-2 relative overflow-hidden">
      <img src={image} alt={desc} className="w-full h-[300px] object-cover " />
      <a
        href={html}
        target="_blank"
        className="flex items-center justify-between p-4 text-white bg-black bg-opacity-50 absolute w-full bottom-0 translate-y-full transition-all group-hover:translate-y-0 duration-300 cursor-pointer"
      >
        <img
          src={avatar}
          alt={name}
          className="w-[40px] h-[40px] rounded-full object-cover border"
        />
        <div>
          <h1 className="capitalize font-semibold">{name}</h1>
          <h1 className="font-extralight text-sm">{likes} likes</h1>
        </div>
      </a>
    </div>
  );
};

export default ImageList;
