import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import style from "./NewCharacterRoute.module.css";
import Character from "../types/Character";
import AbilityAttribute from "../types/AbilityAttributes";
import AbilityScoreOption from "../types/AbilityScoreOption";
import { AbilityScoreDropdown } from "../components/AbilityScoreDropdown";
import Profession, { ProfessionsArray } from "../types/Profession";
import Species, { SpeciesArray } from "../types/Species";

const abilityAttributes: AbilityAttribute[] = [
  //TODO: refactor to enum like Species.ts
  "strength",
  "dexterity",
  "intelligence",
  "wisdom",
  "constitution",
  "charisma",
];

export const NewCharacterRoute = () => {
  const navigate = useNavigate();

  const formSubmit = (data: Character) => {
    // data.hitpoints = data.constitution * xyz; TODO: hitpoints calculation
    console.log(data); //TODO: send data to backend to create character
    navigate("..", { relative: "path", replace: true });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Character>({
    defaultValues: {
      name: "",
      age: 0,
      gender: "male", //TODO: refactor to enum like Species.ts
      level: 1,
      healthpoints: 1,
      strength: 0,
      dexterity: 0,
      intelligence: 0,
      wisdom: 0,
      constitution: 0,
      charisma: 0,
      backstory: "",
      profession: Profession.profession1,
      species: Species.human,
    },
  });

  const [abilityScoreAllocations, setAbilityScoreAllocations] = useState<
    AbilityScoreOption[]
  >([
    {
      value: 15,
      avalible: true,
    },
    {
      value: 14,
      avalible: true,
    },
    {
      value: 13,
      avalible: true,
    },
    {
      value: 12,
      avalible: true,
    },
    {
      value: 10,
      avalible: true,
    },
    {
      value: 8,
      avalible: true,
    },
  ]);

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

        {/* NOTE: Classes are on hold for MVP
        <div>
          <label htmlFor="class">
            <h2>Class</h2>
          </label>
          <select
            id="class"
            {...register("class", { required: "Class is required!" })}
          >
            <option value="wizard">Wizard</option>
            <option value="warrior">Warrior</option>
            <option value="rogue">Rogue</option>
          </select>

          {errors.class && <p>{errors.class.message}</p>}
        </div> */}

        <div>
          <h2>Ability Scores</h2>
          {abilityAttributes.map((abilityAttribute: AbilityAttribute) => {
            return (
              <AbilityScoreDropdown
                key={abilityAttribute}
                abilityScoreAttribute={abilityAttribute}
                abilityScoreAllocations={abilityScoreAllocations}
                setAbilityScoreAllocations={setAbilityScoreAllocations}
                register={register}
                errors={errors}
              />
            );
          })}
        </div>

        <div>
          <label htmlFor="species">
            <h2>Species</h2>
          </label>
          <select
            id="species"
            {...register("species", { required: "Species is required!" })}
          >
            {SpeciesArray().map((species) => {
              return (
                <option key={species} value={Species[species]}>
                  {species}
                </option>
              );
            })}
          </select>

          {errors.species && <p>{errors.species.message}</p>}
        </div>

        <div>
          <label htmlFor="profession">
            <h2>Profession</h2>
          </label>
          <select
            id="profession"
            {...register("profession", { required: "Profession is required!" })}
          >
            {ProfessionsArray().map((profession) => {
              return (
                <option key={profession} value={Profession[profession]}>
                  {profession}
                </option>
              );
            })}
          </select>

          {errors.profession && <p>{errors.profession.message}</p>}
        </div>

        <div>
          <label htmlFor="backstory">
            <h2>Backstory</h2>
          </label>
          <textarea
            id="backstory"
            className={style.backstory}
            {...register("backstory", {
              maxLength: {
                value: 500,
                message: "Max 500 characters!",
              },
            })}
          ></textarea>

          {errors.backstory && <p>{errors.backstory.message}</p>}
        </div>

        <button type="submit">Create!</button>
      </form>
      <Link className={style.backButton} relative="path" to="..">
        Back
      </Link>
    </main>
  );
};
