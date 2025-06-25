'use client';
import Image from 'next/image';

export default function HotelBlock({ id, name, capacity }) {
  const imageLoader = ({ src }) => {
    return `./hotels/${src}.jpeg`;
  };

  return (
    <div className="mt-4">
      <h2>{name}</h2>
      <p>Capacity: {capacity}</p>
      <Image
        src={id}
        loader={imageLoader}
        width={300}
        height={300}
        alt={`Loverly pic of ${name} Hotel`}
      />
    </div>
  );
}
