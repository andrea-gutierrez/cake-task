# Frontend Task

## Overview

This project was developed as part of the process for the role as a frontend developer at Cake. The main feature
include:
- A toggle switch for enabling dark/light mode.
- A button to display a modal
- A modal that, after confirmation, toggle the dark/light modes.

The application was build using NexJs v15.0.3, NextUI and TailwindCSS. Next.js provides a robust framework for building
React applications with page-based routing and server-side rendering, while NextUI offers pre-designed, accessible
components with built-in dark mode support, simplifying the theme switch implementation.

### Thought Process

To achieve this task effectively, I focused on modularity, reusability, and leveraging the capabilities of the chosen
technologies.

1. Framework Choice:
    - Even though my experience spans various web development frameworks, I chose Next.js for this project because of
      its efficient routing and page-based structure, which I’m familiar with from my experience in Svelte. While I’m
      not primarily a React developer, my adaptability and eagerness to learn new technologies have enabled me to
      quickly apply and leverage Next.js for the task.
2. Styling with NextUI:
    - I chose NextUI because it is built on Tailwind CSS, which was chosen as the styling library for this project.
      NextUI's Tailwind foundation makes the development process simplified and enhances code readability, as it aligns
      well with utility-first styling principles.

### Assumptions

- Theme Management: I assumed that dark/light mode could be toggled by only switching the toggle button. If the user
  wants to change again the theme, they only needs to click again.
- Default theme: The default theme is light. Even if the system theme is set to dark, it will initially be set to light.

## Installation and Running the Project

1. Clone the repository
 ```bash
git clone https://github.com/andrea-gutierrez/cake-task.git
cd cake-task
```
2. Install dependencies
```bash
npm install
```
3. Run the Development Server
```bash
npm run dev
```

## Future Improvements
If this project were to be expanded, possible enhancements could include:
- Persistent Theme Storage: Store the user’s theme preference in localStorage to maintain their choice across sessions.