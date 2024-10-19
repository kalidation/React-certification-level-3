import GetterComponent from "@/features/exercise-1/components/GetterComponent";
import SetterComponent from "@/features/exercise-1/components/SetterComponent";
import RemoveComponent from "@/features/exercise-1/components/RemoveComponent";

const ExerciseOne = () => {
  return (
    <div className="flex flex-col gap-y-10">
      <h2 className="scroll-m-20 border-b pb-2 text-4xl font-semibold tracking-tight first:mt-0 first:mb-5">
        Exercise 1
      </h2>
      <SetterComponent />
      <GetterComponent />
      <RemoveComponent />
    </div>
  );
};

export default ExerciseOne;
