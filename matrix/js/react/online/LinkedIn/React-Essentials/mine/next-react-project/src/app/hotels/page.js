async function getData() {
  const res = await fetch("https://snowtooth-hotel-api.fly.dev");

  return res.json();
}

function HotelBlock({ name, capacity }) {
  return (
    <div>
      <h2>
        {name} - Capacity: {capacity}
      </h2>
    </div>
  );
}

export default async function Page() {
  const hotelsData = await getData();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Hotel Details</h1>

        <div>
          {hotelsData.map((hotel) => (
            <HotelBlock
              key={hotel.id}
              name={hotel.name}
              capacity={hotel.capacity}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
