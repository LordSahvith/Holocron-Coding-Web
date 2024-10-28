async function getData() {
  const res = await fetch("https://snowtooth-api-rest.fly.dev");

  return res.json();
}

export default async function Page() {
  const liftData = await getData();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Lift Status Info</h1>
        <table>
          <thead>
            <tr>
              <th>Lift Name</th>
              <th>Current Status</th>
            </tr>
          </thead>
          <tbody>
            {liftData.map((lift) => (
              <tr key={lift.id}>
                <td>{lift.name}</td>
                <td>{lift.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
