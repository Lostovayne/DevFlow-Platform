import QuestionForm from "@/components/forms/QuestionForm";

const AskAQuestion = () => {
  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Ask a Question</h1>
      <div className="mt-9">
        <QuestionForm />
      </div>
    </>
  );
};
export default AskAQuestion;
