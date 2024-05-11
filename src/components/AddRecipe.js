// // AddRecipe Component
// import React from "react";

// const AddRecipe = () => {
//   return <></>;
// };

// export default AddRecipe;

import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import Input from "./Input";
import InputTags from "./InputTags";
import Text from "./Text";
import List from "./List";
import Select from "./Select";




const initialState = {

    title: "",
    description: "",
    keywords: [],
    instructions: "",
    ingredients: [],
    dishType: "",
    recipeImg: ""
};

const reducer = (state, action) => {
    switch (action.type) {
        case "update":
            return { ...state, ...action.payload };
        default:
            throw new Error();
    }
};

const AddRecipe = ({ onExit, onAdd }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const onSaveHandler = () => {
        // Validate the state object
        const validate = Object.values(state).map((elem) => {
            if (typeof elem === "string" && elem === "") {
                return false; // Empty string is considered invalid
            }
            if (typeof elem === "object" && Array.isArray(elem) && elem.length === 0) {
                return false; // Empty array is considered invalid
            }
            return true; // Non-empty strings and arrays are considered valid
        }).reduce((prev, curr) => prev && curr); // Check if all validations pass

        // If state is valid, invoke onAdd function
        if (validate) {
            onAdd({ ...state, id: uuidv4() }); // Add a unique id using uuidv4
        }
    };

    return (
        <>
            <div className="add-recipe">
                <h2>Add a Recipe</h2>
                <Input
                    label="Title"
                    onInput={(e) =>
                        dispatch({ type: 'update', payload: { title: e.target.value } })
                    }
                    value={state.title}
                />
                <Input
                    label="Description"
                    onInput={(e) =>
                        dispatch({ type: 'update', payload: { description: e.target.value } })
                    }
                    value={state.description}
                />
                <InputTags
                    label="Keywords"
                    onUpdate={(tags) =>
                        dispatch({ type: 'update', payload: { keywords: tags } })
                    }
                    value={state.keywords}
                />
                <Select
                    label="Type"
                    options={["Vegetarian", "Vegan", "Meat", "Poultry", "Seafood"]}
                    onSet={(evt) =>
                        dispatch({ type: "update", payload: { dishType: evt.target.value } })
                    }
                />
                <Input
                    label="Image Url"
                    onInput={(e) =>
                        dispatch({ type: "update", payload: { recipeImg: e.target.value } })
                    }
                    value={state.recipeImg}
                />
                <List
                    label="Ingredients"
                    onUpdate={(items) => dispatch({ type: 'update', payload: { ingredients: items } })}
                    value={state.ingredients}
                />
                <Text
                    label="Instructions"
                    onUpdate={(instructions) => dispatch({ type: "update", payload: { instructions } })}
                    value={state.instructions}
                />

            </div>
            <div className="buttons">
                <button className="btn small-btn" onClick={onSaveHandler}>
                    Save
                </button>
                <button className="btn btn-black small-btn" onClick={onExit}>
                    Exit
                </button>
            </div>

        </>
    );
};

export default AddRecipe;

