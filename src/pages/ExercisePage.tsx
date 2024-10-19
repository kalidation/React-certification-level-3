import Navbar from "@/components/NavBar";
import NavBarLink from "@/components/NavBarLink";

const ExercisePage = () => {
  return (
    <div className="flex gap-10">
      <Navbar>
        <div className="flex gap-x-10">
          <NavBarLink to="/" title="Exercise 1" />
          <NavBarLink to="/exercise-2" title="Exercise 2" />
          <NavBarLink to="/exercise-3" title="Exercise 3" />
        </div>
      </Navbar>
    </div>
  );
};

export default ExercisePage;
