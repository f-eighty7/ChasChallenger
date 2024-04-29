import style from "./NewCharacterRoute.module.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Character from "../types/Character";
import { useState } from "react";

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
    //id?
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
      name: "",
      age: 0,
      gender: "male",
      class: "wizard",
      level: 1,
      hitpoints: 1,
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

  const [abilityScoreAllocations, setAbilityScoreAllocations] =
    useState<number>(10); //TODO: find out right amounts

  return (
    <main>
      <h1>New Character</h1>
      <form
        className={style.newCharacterForm}
        onSubmit={handleSubmit(formSubmit)}
      >
        <div>
          <label htmlFor="name">
            <h2>Name</h2>
          </label>
          <input
            type="text"
            id="name"
            placeholder="John Doe..."
            {...register("name", {
              required: "Name is required!",
            })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="age">
            <h2>Age</h2>
          </label>
          <input
            type="number"
            id="age"
            {...register("age", {
              required: "Age is required!",
              min: {
                value: 0,
                message: "Age must be a positive value!",
              },
            })}
          />
          {errors.age && <p>{errors.age.message}</p>}
        </div>

        <div>
          <h2>Gender</h2>
          <label htmlFor="gender-male">Male:</label>
          <input
            type="radio"
            id="gender-male"
            value="male"
            {...register("gender", {
              required: "Gender is required!",
            })}
          />

          <label htmlFor="gender-female">Female:</label>
          <input
            type="radio"
            id="gender-female"
            value="female"
            {...register("gender", {
              required: "Gender is required!",
            })}
          />

          <label htmlFor="gender-non-binary">Non-binary:</label>
          <input
            type="radio"
            id="gender-non-binary"
            value="non-binary"
            {...register("gender", {
              required: "Gender is required!",
            })}
          />

          {errors.gender && <p>{errors.gender.message}</p>}
        </div>

        <div>
          <label htmlFor="class">
            <h2>Class</h2>
          </label>
          <select //TODO: add all classes
            id="class"
            {...register("class", { required: "Class is required!" })}
          >
            <option value="wizard">Wizard</option>
            <option value="warrior">Warrior</option>
            <option value="rogue">Rogue</option>
          </select>

          {errors.class && <p>{errors.class.message}</p>}
        </div>

        <div>
          <h2>Ability Scores</h2>
          <p>{abilityScoreAllocations} points remaining</p>

          <div>
            <label htmlFor="strength">
              <h3>Strength</h3>
            </label>

            <button type="button">-</button>
            <input
              type="number"
              id="strength"
              {...register("strength", {
                required: "Age is required!",
                disabled: true,
                min: {
                  value: 0,
                  message: "Age must be a positive value!",
                },
              })}
            />
            <button type="button">+</button>
            {/* LO */}
          </div>
        </div>

        <button type="submit">Create!</button>
      </form>
      <Link relative="path" to="..">
        Back
      </Link>
    </main>
  );
};
