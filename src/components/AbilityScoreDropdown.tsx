import { useState, ChangeEvent } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import AbilityAttribute from "../types/AbilityAttributes";
import AbilityScoreOption from "../types/AbilityScoreOption";
import Character from "../types/Character";

interface Props {
  abilityScoreAttribute: AbilityAttribute;
  abilityScoreAllocations: AbilityScoreOption[];
  setAbilityScoreAllocations: React.Dispatch<
    React.SetStateAction<AbilityScoreOption[]>
  >;
  register: UseFormRegister<Character>;
  errors: FieldErrors<Character>;
}

export const AbilityScoreDropdown = ({
  abilityScoreAttribute,
  abilityScoreAllocations,
  setAbilityScoreAllocations,
  register,
  errors,
}: Props) => {
  const [attributeAbilityScore, setAttributeAbilityScore] = useState(0);

  return (
    <div id={`${abilityScoreAttribute}-ability-score`}>
      <label htmlFor={`${abilityScoreAttribute}`}>
        <h3 className="capitalize">{`${abilityScoreAttribute}`}</h3>
      </label>

      <select
        id={`${abilityScoreAttribute}`}
        value={attributeAbilityScore}
        {...register(`${abilityScoreAttribute}`, {
          required: `${abilityScoreAttribute} is required!`,
          min: {
            value: 8,
            message: `You need to choose a value for ${abilityScoreAttribute}!`,
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
                (abilityScore) => abilityScore.value == attributeAbilityScore
              );
              if (previousSelected) previousSelected.avalible = true;

              //Return modified array to setState
              return newArray;
            });

            //Update dropdown value to new value
            setAttributeAbilityScore(parseInt(event.target.value) | 0);
          },
        })}
      >
        {[
          <option key={`default${abilityScoreAttribute}`} value={0}>
            Choose
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
      {errors[`${abilityScoreAttribute}`] && (
        <p className="capitalize">
          {errors[`${abilityScoreAttribute}`]?.message}
        </p>
      )}
      {/* 
      TODO: reset buttons, moving on for now as reset does not set <select> value, leads to validation not working and its wasting time
      <button
        type="button"
        onClick={() => {
          setAbilityScoreAllocations(() => {
            //Copy array
            const newArray = [...abilityScoreAllocations];

            //Enable option for selected value
            const selected = newArray.find(
              (abilityScore) => abilityScore.value == attributeAbilityScore
            );
            if (selected) selected.avalible = true;

            //Return modified array to setState
            return newArray;
          });

          //BUG: does not set <select> value, leads to validation not working
          setAttributeAbilityScore(0);
        }}
      >
        Reset
      </button> */}
    </div>
  );
};
