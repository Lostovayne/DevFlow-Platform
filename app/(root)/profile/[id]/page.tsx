import { notFound } from "next/navigation";

const Profile = ({ params }: { params: { id: string } }) => {
  if (!params.id) {
    return notFound();
  }

  return (
    <div className="flex flex-col gap-4 px-4 py-6">
      <h1 className="text-2xl font-bold">User Profile</h1>
      <p>Profile ID: {params.id}</p>
    </div>
  );
};
export default Profile;
