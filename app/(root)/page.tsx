import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import Link from "next/link";

// questions
const questions = [
  {
    id_: "1",
    title: "How to use NextJS?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies nulla non metus pulvinar imperdiet. Sed porttitor lectus nibh.",
    tags: [
      { _id: "1", name: "NextJS" },
      { _id: "2", name: "ReactJS" },
    ],
    author: { _id: "1", name: "John Doe" },
    upvotes: 10,
    answers: 40,
    views: 1220,
    createdAt: new Date(),
  },

  {
    id_: "2",
    title: "How to use JavaScript ?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies nulla non metus pulvinar imperdiet. Sed porttitor lectus nibh.",
    tags: [
      { _id: "1", name: "JavaScript" },
      { _id: "2", name: "ReactJS" },
    ],
    author: { _id: "1", name: "John Doe" },
    upvotes: 10,
    answers: 20,
    views: 1320,
    createdAt: new Date(),
  },
];

interface SearchParams {
  searchParams: Promise<Record<string, string>>;
}

const HomePage = async ({ searchParams }: SearchParams) => {
  return (
    <>
      <section className="flex w-full flex-col-reverse sm:flex-row justify-between gap-4 sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Button asChild className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
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
      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.map((question) => (
          <h1 key={question.id_}>{question.title}</h1>
        ))}
      </div>
    </>
  );
};
export default HomePage;
