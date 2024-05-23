import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm, UseFormGetValues, UseFormSetValue } from "react-hook-form";
import style from "./NewCustomCharacterRoute.module.css";
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

const handleGenerateBackstoryButtonClicked = (
  getValues: UseFormGetValues<Character>,
  setValue: UseFormSetValue<Character>
) => {
  console.warn("Not yet implemented");

  const formValues = getValues();
  //TODO: send prompt with other character information (formValues) to generate a backstory
  setValue("backstory", "Some backstory generated by Le Chat Goober");
};

const handleGenerateAvatarButtonClicked = (
  getValues: UseFormGetValues<Character>,
  setValue: UseFormSetValue<Character>,
  setAvatarIconPreviewUrl: React.Dispatch<React.SetStateAction<string>>
) => {
  console.warn("Not yet implemented");

  const formValues = getValues();
  //TODO: send prompt with other character information (formValues) to generate a representative avatar icon
  const tempResonese = "https://avatars.githubusercontent.com/u/72140147?v=4";
  setAvatarIconPreviewUrl(tempResonese); //Preview
  setValue("imageUrl", tempResonese); //Form data
};

const handleGenerateCharacterButtonClicked = (
  characterPrompt: string,
  setValue: UseFormSetValue<Character>,
  setAbilityScoreAllocations: React.Dispatch<
    React.SetStateAction<AbilityScoreOption[]>
  >,
  setAvatarIconPreviewUrl: React.Dispatch<React.SetStateAction<string>>
) => {
  console.warn("Not yet implemented");
  //TODO: send prompt (characterPrompt) and recieve a response with character data

  setValue("name", "Genorator Blawg");
  setValue("age", 999);
  setValue("gender", "female");
  setValue("level", 666);

  //TODO: Extra, setting like this does not change from "error field is required state".
  setValue("strength", 15);
  setValue("dexterity", 8);
  setValue("intelligence", 10);
  setValue("wisdom", 12);
  setValue("constitution", 13);
  setValue("charisma", 14);
  //All values will be set so this works
  setAbilityScoreAllocations([
    {
      value: 15,
      avalible: false,
    },
    {
      value: 14,
      avalible: false,
    },
    {
      value: 13,
      avalible: false,
    },
    {
      value: 12,
      avalible: false,
    },
    {
      value: 10,
      avalible: false,
    },
    {
      value: 8,
      avalible: false,
    },
  ]);

  setValue(
    "backstory",
    "Hello full character generated with this epic backstory! Wowzers"
  );
  setValue("profession", Profession.profession3);
  setValue("species", Species.elf);
  setValue(
    "imageUrl",
    "https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg"
  );
  setAvatarIconPreviewUrl(
    "https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg"
  );
};

const handleResetAllAbilityScoreButtonClicked = (
  setValue: UseFormSetValue<Character>,
  setAbilityScoreAllocations: React.Dispatch<
    React.SetStateAction<AbilityScoreOption[]>
  >
) => {
  setValue("strength", 0);
  setValue("dexterity", 0);
  setValue("intelligence", 0);
  setValue("wisdom", 0);
  setValue("constitution", 0);
  setValue("charisma", 0);
  //All values will be set so this works
  setAbilityScoreAllocations([
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
};

export const NewCustomCharacterRoute = () => {
  const navigate = useNavigate();

  const formSubmit = (data: Character) => {
    // data.hitpoints = data.constitution * xyz; TODO: hitpoints calculation
    console.log(data); //TODO: send data to backend to create character
    navigate("..", { relative: "path", replace: true });
  };

  const {
    register,
    setValue,
    getValues,
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
      imageUrl: "",
      isFavorite: false,
    },
  });

  const [generateCharacterPrompt, setGenerateCharacterPrompt] =
    useState<string>("");

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

  const [avatarIconPreviewUrl, setAvatarIconPreviewUrl] = useState<string>(
    "/src/assets/images/defaultCharacterIcon.png"
  );

  return (
    <main>
      <div>
        <h2>Generate With Prompt</h2>
        <input
          type="text"
          value={generateCharacterPrompt}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setGenerateCharacterPrompt(event.target.value)
          }
        />
        <button
          type="button"
          onClick={() =>
            handleGenerateCharacterButtonClicked(
              generateCharacterPrompt,
              setValue,
              setAbilityScoreAllocations,
              setAvatarIconPreviewUrl
            )
          }
        >
          Generate All
        </button>
      </div>
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
                getValues={getValues}
                setValue={setValue}
                errors={errors}
              />
            );
          })}
          <button
            type="button"
            onClick={() =>
              handleResetAllAbilityScoreButtonClicked(
                setValue,
                setAbilityScoreAllocations
              )
            }
          >
            Reset All
          </button>
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
          <button
            type="button"
            onClick={() =>
              handleGenerateBackstoryButtonClicked(getValues, setValue)
            }
          >
            Generate New
          </button>

          {errors.backstory && <p>{errors.backstory.message}</p>}
        </div>

        <div className={style.avatarIcon}>
          <label htmlFor="">
            <h2>Avatar</h2>
          </label>
          <img src={avatarIconPreviewUrl} alt="Your Avatar" />
          <button
            type="button"
            onClick={() =>
              handleGenerateAvatarButtonClicked(
                getValues,
                setValue,
                setAvatarIconPreviewUrl
              )
            }
          >
            Generate New
          </button>
        </div>

        <button type="submit">Create!</button>
      </form>
      <Link className={style.backButton} relative="path" to="..">
        Back
      </Link>
    </main>
  );
};