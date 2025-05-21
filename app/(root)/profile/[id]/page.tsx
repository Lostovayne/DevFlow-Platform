import { notFound } from "next/navigation";

type ProfilePageProps = {
  params: Promise<{ id: string }>;
};

const Profile = async ({ params }: ProfilePageProps) => {
  const { id } = await params;
  if (!id) {
    notFound();
  }
  return (
    <div className="flex flex-col gap-4 px-4 py-6">
      <h1 className="text-2xl font-bold">User Profile {id} </h1>
    </div>
  );
};
export default Profile;
