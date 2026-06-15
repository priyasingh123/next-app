async function getUserDetails() {
  //const response = await fetch("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
  const response = await fetch("http://localhost:3000/api/user");
  return response.json();
}

// async server component
export default async function Home() {
  await new Promise((r) => setTimeout(r, 1000));
  const userDetails = await getUserDetails();

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>Name: {userDetails.name}</div>
          {userDetails.email}
        </div>
      </div>
    </div>
  );
}
