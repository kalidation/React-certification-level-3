import ImageDialog from "@/features/exercise-2/Examples/ImageDialog";
import SimpleDialog from "@/features/exercise-2/Examples/SimpleDialog";

const ExerciseTwo = () => {
  return (
    <div>
      <h2 className="scroll-m-20 border-b pb-2 text-4xl font-semibold tracking-tight first:mt-0 first:mb-5">
        Exercise 2
      </h2>
      <div className="flex flex-col gap-y-5">
        <h3 className="scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight first:mt-0 first:mb-5">
          Simple Example
        </h3>
        <SimpleDialog />
        <h3 className="scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight first:mt-0 first:mb-5">
          Images Example
        </h3>
        <ImageDialog />
      </div>
    </div>
  );
};

export default ExerciseTwo;
