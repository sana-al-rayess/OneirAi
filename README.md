<img src="./readme/title1.svg"/>

<br><br>

<!-- project philosophy -->
<img src="./readme/title2.svg"/>

>Introducing OneirAi, a dream interpretation and visualization web app that utilizes the power of AI technology. This platform allows users to gain deeper insights into their subconscious mind by interpreting their dreams with personalized analysis and visualizations. In addition, it offers daily horoscopes, personality analysis, and compatibility tests all with the help of AI. 
>
> Our mission is to empower individuals to understand themselves better and to provide a unique and personalized experience for each user.

### User Stories
- As a new user, I want to register an account on OneirAi, so that I can begin keeping track of my dreams and exploring their meaning.
- As a user, I want to log in to my account on OneirAi, so that I can access my dream journal and past interpretations.
- As a user, I want to be able to log out of my account on OneirAi, so that I ensure the privacy and security of my dream data.
- As a user, I want to be able to edit my profile on OneirAi, so that I can update my personal information or change my password.
- As a user, I want to be able to enter details about my dream, so that I can get an AI-generated interpretation of my dream that offers insights into my subconscious thoughts.
- As a user, I want to be able to view a visual representation of my dream, so that I can explore and connect to my dream in a creative way.
- As a user, I want to be able to download my dream details as a text file, so that I can have a record of my dreams and refer to them in the future
- As a user, I want to be able to access my daily horoscope through the OneirAi website, so that I can see what the stars have in store for me each day.
- As a user, I want to be able to receive a personality analysis from OneirAi, so that I can gain insights into my strengths and weaknesses and better understand myself.
- As a user who is interested in relationships, I want to be able to take a compatibility test on OneirAi, so that I can see how well-matched I am with my partner or potential partners.
- As a user, I want to be able to subscribe to OneirAi mailing list so that I can receive updates on new features, improvements, and promotions related to the dream interpretation and horoscope services provided by OneirAi.

### Admin Stories
- As an admin, I want to be able to view a list of all registered users on the platform, so that I can keep track of user activity and identify any potential issues or concerns.
- As an admin, I want to be able to generate bar charts, polar charts, line charts, and pie charts based on the data analysis of dream categories in each country, so that I can easily visualize the data and see what is the most common category in each country.
- As an admin, I want to be able to get count of all registered users on the platform, so that I can track the growth of the website over time.


<br><br>

<!-- Prototyping -->
<img src="./readme/title3.svg"/>

> We designed Coffee Express using wireframes and mockups, iterating on the design until we reached the ideal layout for easy navigation and a seamless user experience.

### Wireframes
| Login screen  | Register screen |  Landing screen |
| ---| ---| ---|
| ![Landing](./readme/demo/Login_wireframe.png) | ![fsdaf](./readme/demo/Register_wireframe.png) | ![fsdaf](./readme/demo/landing_wireframe.png) |
| UserDashboard screen  | Add Dream screen |  Landing screen |
| ---| ---| ---|
| ![Landing](./readme/demo/Userdash_wireframe.png) | ![fsdaf](./readme/demo/AddDream_wireframe.png) | ![fsdaf](./readme/demo/Interpretation_wireframe.png) |

### Mockups
| Login screen  | SignUp Screen |  |
| ---| ---| ---|
| ![Landing](./readme/demo/Login_mockup.png) | ![fsdaf](./readme/demo/SignUp_mockup.png) | 
| Login screen  | SignUp Screen |  |
| ---| ---| ---|
| ![Landing](./readme/demo/Landing_mockup.png) | ![fsdaf](./readme/demo/horoscope.png) | 

<details><summary>See more mockups</summary>

| UserDash Screen | Add Dream Screen | Interpret Dream Screen |
| ---| ---| ---|
| ![Landing](./readme/demo/user_dash.png) | ![fsdaf](./readme/demo/add_dream.png) | ![fsdaf](./readme/demo/interpret.png) |
| Visualize Dream Screen |  Change Password Screen |   Edit Profile  |
| ---| ---| ---|
| ![Landing](./readme/demo/visualize.png) | ![fsdaf](./readme/demo/changepass.png) | ![fsdaf](./readme/demo/edit_prof.png) |

| Admin Screen | View Registered Users Screen | Pie Chart Analysis Screen |
| ---| ---| ---|
| ![Landing](./readme/demo/admin_home.png) | ![fsdaf](./readme/demo/view-users.png) | ![fsdaf](./readme/demo/pie-chart.png) |
| Bar Chart Analysis Screen |
| ---| ---| ---|
| ![Landing](./readme/demo/bar-chart.png) | 

</details>
#

<br><br>


<!-- Implementation -->
<img src="./readme/title4.svg"/>

> Using the wireframes and mockups as a guide, we implemented OneirAi app with the following features:

### User Screens (Web)
| Login screen  | Register screen |  Landing screen |
| ---| ---| ---|
| ![Landing](./readme/gifs/horoscope_demo.gif) | ![fsdaf](./readme/demo/signup.svg) | ![fsdaf](./readme/demo/1440x1024.png) |
| Home screen  | Menu Screen | Order Screen |
| ![Landing](./readme/demo/1440x1024.png) | ![fsdaf](./readme/demo/1440x1024.png) | ![fsdaf](./readme/demo/1440x1024.png) |

<br><br>



<br><br>
<img src="./readme/title6.svg"/>


> These are the instructions on setting up your project locally.
To get a local copy up and running follow these simple steps.

### Prerequisites

This is a list of things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```
* Apache, PHP, MySQL [Download](https://downloadsapachefriends.global.ssl.fastly.net/8.1.6/xampp-windows-x64-8.1.6-0-VS16-installer.exe?from_af=true)
* Download composer   [Download](https://getcomposer.org/Composer-Setup.exe)

<a id="how-to-run"></a>

### Installation

1. Open your XAMPP control panel and start Apache and MySQL
2. Clone the repo 
```sh
   git clone https://github.com/sanarayess/OneirAi.git
```
  
3. Go into the back-end folder
```sh
   cd oneirai-backend
```
4. Rename the .env.example file to .env and specify your database name

5. Migrate the database schema
```sh
   php artisan migrate
```
6. Generate a secret key to handle token encryption 
```sh
   php artisan jwt:secret
```
7. Install the dependencies 
```sh
   composer install
```
8. Launch the server
```sh
   php artisan serve
```
9. Now to get the front-end up and running go into the front-end folder in a new terminal
```sh
   cd oneirai-frontend
```
10. Install the dependencies
   ```sh
   npm install
   ```
11. Rename .env.example to .env.local

12. Start the application
   ```sh
   npm start
   ```