// // Recipe Component
// import React from "react";

// const Recipe = () => {
//     return <></>;
// };

// export default Recipe;

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
// import { v4 as uuidv4 } from "uuid";

const Recipe = ({ recipeId, onExit, children }) => {
    const [recipeData, setRecipeData] = useState();

    useEffect(() => {
        // Fetch recipe data
        fetch(`/api/recipe.id/${recipeId}`)
            .then((res) => res.json())
            .then(({ recipe }) => setRecipeData(recipe));
    }, [recipeId]);

    return (
        <div className="recipe-detail">
            <button className="btn small-btn" onClick={onExit}>X</button>
            <h2>LET'S COOK</h2>
            {recipeData && children(recipeData)}
        </div>
    );
};

Recipe.propTypes = {
    recipeId: PropTypes.string.isRequired,
    onExit: PropTypes.func.isRequired
};

export default Recipe;
