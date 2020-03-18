import React from 'react';

const Recipe = ({title, calories, image, ingredients}) => {
    return (
        <>
            <h1>{title}</h1>
            <ol>Ingredients:
                {ingredients.map(res => (
                    <li>{res.text}</li>
                    ))}
            </ol>
            <p>Calories:{calories}</p>
            <img src ={image} alt=''></img>
        </>
    )
};

export default Recipe;