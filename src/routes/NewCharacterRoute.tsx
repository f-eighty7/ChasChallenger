import style from "./NewCharacterRoute.module.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Character from "../types/Character";

/*
type Character = {
    name: string;
    age: number;
    gender: string; //should be enum/string literal?
    class: string; //should be enum/string literal?
    level: number;
    hitpoints: number;
    strength: number;
    dexterity: number;
    intelligence: number;
    wisdom: number;
    constitution: number;
    charisma: number;
    backstory: string;
    professionName: null; //should be enum/string literal?
    speciesName: null; //should be enum/string literal?
    //favorite: bool;
    //image? (url)
  };
 */

const formSubmit = (data: Character) => {
  console.log(data);
};

export const NewCharacterRoute = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Character>({
    defaultValues: {
      name: "name",
      age: 0,
      gender: "male",
      class: "wizard",
      level: -1,
      hitpoints: -1,
      strength: 10,
      dexterity: 10,
      intelligence: 10,
      wisdom: 10,
      constitution: 10,
      charisma: 10,
      backstory: "Backstory",
      professionName: null,
      speciesName: null,
    },
  });

  return (
    <main>
      <h1>New Character</h1>
      <form onSubmit={handleSubmit(formSubmit)}>
        <div>
          <label htmlFor="characterName">Name:</label>
          <input
            type="text"
            id="characterName"
            {...register("name", {
              required: "Name is required!",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters",
              },
            })}
          />
          {errors.name && <h2>{errors.name.message}</h2>}
        </div>
        <button type="submit">Create!</button>
      </form>
      <Link relative="path" to="..">
        Back
      </Link>
    </main>
  );
};
