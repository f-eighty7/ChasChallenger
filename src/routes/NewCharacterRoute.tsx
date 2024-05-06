import style from "./NewCharacterRoute.module.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Character from "../types/Character";
import { ChangeEvent, ChangeEventHandler, useState } from "react";

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
      strength: 0,
      dexterity: 0,
      intelligence: 0,
      wisdom: 0,
      constitution: 0,
      charisma: 0,
      backstory: "Backstory",
      professionName: null,
      speciesName: null,
    },
  });

  // const [abilityScoreAllocations, setAbilityScoreAllocations] =
  // const [abilityScoreAllocations, setAbilityScoreAllocations] = useState<
  //   number[]
  // >([15, 14, 13, 12, 10, 8]);

  type AbilityScoreOption = {
    value: number;
    avalible: boolean;
  };
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

  const [strengthAbilityScore, setStrengthAbilityScore] = useState(0);
  const [dexterityAbilityScore, setDexterityAbilityScore] = useState(0);

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

          <div id="strength-ability-score">
            <label htmlFor="strength">
              <h3>Strength</h3>
            </label>

            <select
              id="strength"
              value={strengthAbilityScore}
              {...register("strength", {
                required: "Strength is required!",
                min: {
                  value: 8,
                  message: "Strength is required!",
                },
                onChange: (event: ChangeEvent<HTMLSelectElement>) => {
                  setAbilityScoreAllocations(() => {
                    //Copy array
                    const newArray = [...abilityScoreAllocations];

                    //Disable option for selected value
                    const selectedOption = newArray.find(
                      (abilityScore) =>
                        abilityScore.value == parseInt(event.target.value)
                    );
                    if (selectedOption) selectedOption.avalible = false;

                    //Enable option for previous selected value
                    const previousSelected = newArray.find(
                      (abilityScore) =>
                        abilityScore.value == strengthAbilityScore
                    );
                    if (previousSelected) previousSelected.avalible = true;

                    //Return modified array to setState
                    return newArray;
                  });

                  //Update dropdown value to new value
                  setStrengthAbilityScore(parseInt(event.target.value) | 0);
                },
              })}
            >
              {[
                <option key={"defaultStrength"} value={0}>
                  0
                </option>,
                ...abilityScoreAllocations.map((abiliyScore) => {
                  return (
                    <option
                      key={abiliyScore.value}
                      value={abiliyScore.value}
                      disabled={!abiliyScore.avalible}
                    >
                      {abiliyScore.value}
                    </option>
                  );
                }),
              ]}
            </select>
            {errors.strength && <p>{errors.strength.message}</p>}
          </div>

          <div id="dexterity-ability-score">
            <label htmlFor="dexterity">
              <h3>Dexterity</h3>
            </label>

            <select
              id="dexterity"
              value={dexterityAbilityScore}
              {...register("dexterity", {
                required: "Dexterity is required!",
                min: {
                  value: 8,
                  message: "Dexterity is required!",
                },
                onChange: (event: ChangeEvent<HTMLSelectElement>) => {
                  setAbilityScoreAllocations(() => {
                    //Copy array
                    const newArray = [...abilityScoreAllocations];

                    //Disable option for selected value
                    const selectedOption = newArray.find(
                      (abilityScore) =>
                        abilityScore.value == parseInt(event.target.value)
                    );
                    if (selectedOption) selectedOption.avalible = false;

                    //Enable option for previous selected value
                    const previousSelected = newArray.find(
                      (abilityScore) =>
                        abilityScore.value == dexterityAbilityScore
                    );
                    if (previousSelected) previousSelected.avalible = true;

                    //Return modified array to setState
                    return newArray;
                  });

                  //Update dropdown value to new value
                  setDexterityAbilityScore(parseInt(event.target.value) | 0);
                },
              })}
            >
              {[
                <option key={"defaultDexterity"} value={0}>
                  0
                </option>,
                ...abilityScoreAllocations.map((abiliyScore) => {
                  return (
                    <option
                      key={abiliyScore.value}
                      value={abiliyScore.value}
                      disabled={!abiliyScore.avalible}
                    >
                      {abiliyScore.value}
                    </option>
                  );
                }),
              ]}
            </select>
            {errors.dexterity && <p>{errors.dexterity.message}</p>}
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
