# Angular Blog Posts List Page

## Instructions to Run the Project Locally:

1. Ensure you have Node.js installed on your local machine. You can download it from [here](https://nodejs.org/).

2. Clone the project repository to your local machine using the following command:

   ```
   git clone <repository-url>
   ```

3. Navigate to the project directory:

   ```
   cd angular-blog-posts-list-page
   ```

4. Install project dependencies:

   ```
   npm install
   ```

5. Start the development server:

   ```
   ng serve
   ```

6. Open your web browser and navigate to `http://localhost:4200` to view the project.

## Description:

This project features a blog posts list page where each blog is represented by a blog card component. The project is integrated with the Dev.to API to fetch blog articles. It includes loading indicators and error messages in separate components to enhance user experience. Additionally, it utilizes the ngx-pagination library for pagination of blog posts.

## Project Structure:

- `src/`: Contains the source code of the Angular project.
  - `app/`: Contains Angular components, services, and modules.
    - `components/`: Contains reusable components.
      - `blog-card/`: Component representing a single blog card.
      - `loading-indicator/`: Component for displaying loading indicator.
      - `error-message/`: Component for displaying error messages.
    - `services/`: Contains Angular services for API integration.
    - `models/`: Contains data models/interfaces.
    - `app.component.html`: Main HTML template file.
    - `app.component.ts`: Main TypeScript file for the root component.
    - `app.module.ts`: Main Angular module file.

## Technologies Used:

- Angular 17
- TypeScript
- HTML
- CSS
- ngx-pagination

## API Integration:

The project is integrated with the Dev.to API to fetch blog articles. It utilizes Angular services to handle API requests and responses.

## Components:

- **Blog Card Component:** Represents a single blog card. It displays information such as the blog title, author, and publish date.

- **Loading Indicator Component:** Displays a loading indicator while data is being fetched from the API.

- **Error Message Component:** Displays error messages if there is an issue fetching data from the API.

## Additional Features:

- Responsive Design: The project is responsive and adapts to different screen sizes for optimal viewing experience.

- Error Handling: Error messages are displayed if there are any issues fetching data from the API.

- Pagination: The ngx-pagination library is used for pagination of blog posts, allowing users to navigate through multiple pages of blog posts.

## Contributing:

Contributions are welcome! Feel free to submit issues or pull requests if you encounter any problems or have suggestions for improvements.
