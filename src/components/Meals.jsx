export default function Meals() {
  async function fetchMeals() {
    const response = await fetch("http://localhost:3000/meals");

    if (!response.ok) {
      // ...
    }

    const meals = await response.json();
  }

  return <ul id="meals"></ul>;
}
