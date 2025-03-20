# How to run

## With Docker
- `docker compose build`
- `docker compose up` to run the project

## With ASDF
using `ASDF`:
- after install [ASDF](https://asdf-vm.com/guide/getting-started.html), nodejs and npm plugins, just run `asdf install`. Will have a node and npm in the correct version.
- `npm install` to install the dependencies

# Commands
- To run project: `npm run dev`
- To run tests(unit): `npm run test`
- To run tests(E2E): `npm run test:e2e`


---
# Todo list
List of Todos to be done in the project
- [ ] add more E2E tests
- [ ] add more unit tests
- [ ] make filters work (how?)


---

# Challenge

## Star Wars Character App - Take-Home React Assignment

This React test evaluates your skills in UI development, API integration, testing, and optionally, authentication mocking. You have 7 days to complete the assignment and submit it to a public Github repository.

**Objective:**

Build a Star Wars character application that retrieves data from the SWAPI ([https://swapi.dev/](https://swapi.dev/)) public API and displays character information with features like pagination, search, filtering, and detailed modal views.

**Technical Information:**

* **API Root:** [https://swapi.dev/api/](https://swapi.dev/api/)
* **Documentation:** [https://swapi.dev/documentation](https://swapi.dev/documentation)
* **Search Endpoint:** [https://swapi.dev/api/people/?search](https://swapi.dev/api/people/?search)
* **Star Wars Databank:** [https://starwars-databank.vercel.app/](https://starwars-databank.vercel.app/)

**App Functionality:**

1. **Character List:**
    * Fetch character data from the SWAPI `/people` endpoint.
    * Implement pagination to handle large datasets.
    * Display a loading indicator while fetching data.
    * Handle errors in case of API issues.

2. **Character Card:**
    * Display each character in a card with their name.
    * Include a hover animation for each card.
    * Clicking a card should open a modal with detailed character information.

3. **Character Modal:**
    * **Fetch character photo**:
        * Use the [Star Wars Databank](https://starwars-databank.vercel.app/character/single#filter-by-name) to retrieve the character's photo by name and display it in the modal. Show a default image if the character is not found in the API.
        * This involves integrating a second API.
    * Display character details such as:
        * Name (as modal header)
        * Height (in meters)
        * Mass (in kg)
        * Gender
        * Birth year
        * Number of films the character appears in
    * Fetch and display homeworld information:
        * Name
        * Terrain
        * Climate
        * Population

4. **Search & Filter:**
    * Implement a search bar where users can enter a character's name (partial or full) to filter the displayed list using the search endpoint.
    * Add filter options for homeworld, starships, and species to refine the results.
    * Combine the search functionality with filters.

5. **Optional: Mocked JWT Authentication:**
    * Optionally, implement a mocked JWT authentication system with login and logout functionality.
    * Use hard-coded credentials (username/password) for login without actual backend interaction.
    * Include a UI element to display login/logout status.

**Testing:**

* Implement a basic integration test to verify that the character modal opens and displays the correct information.

**Deliverables:**

* A public Github repository containing your React application code.
* A well-structured README file that includes:
    * Installation instructions (dependencies, setup steps)
    * Instructions on how to run the application
* Provide a Dockerfile to containerize the application, allowing it to be easily run using Docker (e.g., with a single docker-compose up command).

**Evaluation Criteria:**

* **Functionality:** All features listed above are implemented and function correctly.
* **Code Quality:** The code is readable, well-structured, and properly commented.
* **UI Design:** The interface is user-friendly and visually appealing.
* **Testing:** Integration and, optionally, unit test coverage demonstrate the functionality.

**Additional Notes:**

* Strong emphasis on TypeScript usage: Demonstrate proper type definitions, interfaces, and usage across the codebase.
* Feel free to use any additional libraries or frameworks that improve development efficiency (e.g., Zustand or Redux for state management, Material UI for components).
* The test aims to assess a broad range of React skills. Focus on delivering a well-rounded solution without aiming for absolute perfection.

By completing this take-home test, you’ll showcase your ability to build a feature-rich, well-tested React application with API integration. Good luck!
