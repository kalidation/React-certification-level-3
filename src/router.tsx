import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ExerciseOne from "@/pages/ExerciseOne";
import ExerciseTwo from "@/pages/ExerciseTwo";
import ExerciseThree from "@/pages/ExerciseThree";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <ExerciseOne />,
        index: true,
      },
      {
        path: "exercise-2",
        element: <ExerciseTwo />,
      },
      {
        path: "exercise-3",
        element: <ExerciseThree />,
      },
    ],
  },
]);
