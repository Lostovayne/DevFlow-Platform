import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const HomePage = async () => {
  const session = await auth();
  console.log(session);
  return (
    <div className="">
      <h1 className="text-red-200">LAD COBRA! SALVAME HUEVITO REY</h1>

      <form
        className="px-10 pt-[100px]"
        action={async () => {
          "use server";
          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
        <Button type="submit">Log out</Button>
      </form>
    </div>
  );
};
export default HomePage;
