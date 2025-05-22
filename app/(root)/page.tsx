import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import Link from "next/link";

const HomePage = async () => {
  return (
    <>
      <section className="flex w-full flex-col-reverse sm:flex-row justify-between gap-4 sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Button
          asChild
          className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900"
        >
          <Link href={ROUTES.ASK_QUESTION}>Ask Question</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch
          route="/"
          imgSrc="/icons/search.svg"
          placeholder="Search questions..."
          otherClasses="flex-1"
        />
      </section>
      HomeFilters
      <div className="mt-10 flex w-full flex-col gap-6"></div>
    </>
  );
};
export default HomePage;
