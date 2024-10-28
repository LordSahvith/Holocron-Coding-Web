"use client";
import Image from "next/image";

export default function HotelBlock({ id, name, capacity }) {
  const imageLoader = ({ src }) => {
    return `./hotels/${src}.jpeg`;
  };
  return (
    <div>
      <h2>
        {name} - Capacity: {capacity}
        <Image
          src={id}
          width={300}
          height={300}
          loader={imageLoader}
          alt={`Pic of the ${name} during winter.`}
        />
      </h2>
    </div>
  );
}
