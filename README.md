<h1>React Dad Joke Web App</h1>

This React project creates a simple web application that fetches a dad joke from the "icanhazdadjoke" API and displays it on the page. The main functionality can be summarized as follows:

## Initial Joke Load:

The component initially loads with an empty joke.</br>
The useEffect hook is used to fetch a joke from the API when the component mounts.</br>
The fetched joke is then stored in the component's state using the setJoke function.

## Dynamic Button and Body Color:

The component has a button labeled "New Joke."</br>
The button and the body of the container have dynamic colors.</br>
The initial color of the button is set to "#3408db," and the body color is set to "#87CEFA."</br>
When the "New Joke" button is clicked, the handleClick function is triggered.</br>
The getRandomColor function generates a random hexadecimal color, and the button color is updated to this new color using the setButtonColor function.</br>
Additionally, the getRandomColor function is used to set a new random color for the body background, creating a visually dynamic experience.

## Fetching New Jokes:

When the "New Joke" button is clicked, the handleClick function is called.</br>
This function triggers a new API request to fetch a fresh dad joke.</br>
The fetched joke is then updated in the component's state using the setJoke function.</br></br>


Overall, this project demonstrates the integration of React with external APIs, dynamic color changes, and handling user interactions to create a light-hearted and visually appealing dad joke web application.

## Demo:

