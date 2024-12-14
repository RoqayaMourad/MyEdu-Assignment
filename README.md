# Project Title: MyEdu

## Description

The **MyEdu** project is a responsive and functional web app built using Angular, Ionic, and Capacitor. It Allows users to subscribe to a monthly surprise box for their child. It consists of two main pages:

1. **Home Page**:
   - Includes a header, footer, hero section, and "How It Works" section.
   - Features two buttons that navigate to the subscription page.

2. **Subscription Page**:
   - Allows users to subscribe to a monthly surprise box for their child.
   - Includes a form for user and child information, topic selection, and a summary of the subscription.

## Features

1. **Pixel-perfect Design**: The UI implementation closely mirrors the Figma prototype.
2. **Responsive Layout**: Works seamlessly on both web and mobile browsers.
3. **Functional Navigation**: Buttons on the home page navigate to the subscription page.
4. **Subscription Form**: Captures user and child details.
5. **Testing**: Includes meaningful tests written with Jasmine.

## Getting Started
### Prerequisites
Ensure you have the following tools installed on your system:
- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/)
- [Ionic CLI](https://ionicframework.com/docs/cli)
- [Angular CLI](https://angular.io/cli)

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd myedu
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the project:
   ```bash
   ionic serve
   ```

### Running Tests
To run tests, use the following command:
    ```
    ng test
    ```


## Development Process

### Setup

1. The project was initialized using the following command:
   ```bash
   ionic start myedu blank --type=angular
   ```
   choose 
   ```bash
   standalone
   ```
2. The app creation wizard was not used.
3. A GitHub repository was set up, and meaningful commit messages were used throughout development.
4. install tailwind
    ```bash
    ng add ngx-tailwind
    ```
5. add tailwind config in global.scss
    ```
    @import 'tailwindcss/base';
    @import 'tailwindcss/components';
    @import 'tailwindcss/utilities';
    ```
6. add components needed. 
    ```
    ionic generate component shared/header --standalone
    ionic generate component subscribe --standalone
    ```

7. testing
    ```
    ng test
    ```

## GitHub Repository
The project can be accessed at: [GitHub Repository Link](<https://github.com/RoqayaMourad/MyEdu-Assignment.git>)

---

**Author**: [Roqaya Mourad]  
**Email**: [roqayamourad@gmail.com]
