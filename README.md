<img src="./readme/title1.svg"/>

<br><br>

<!-- project philosophy -->
<img src="./readme/title2.svg"/>

>Introducing OneirAi, a dream interpretation and visualization web app that utilizes the power of AI technology. This platform allows users to gain deeper insights into their subconscious mind by interpreting their dreams with personalized analysis and visualizations. In addition, it offers daily horoscopes, personality analysis, and compatibility tests all with the help of AI. 
>
> Our mission is to empower individuals to understand themselves better and to provide a unique and personalized experience for each user.

### User Stories
- As a user, I want to be able to enter details about my dream, so that I can get an AI-generated interpretation of my dream that offers insights into my subconscious thoughts.
- As a user, I want to be able to view a visual representation of my dream, so that I can explore and connect to my dream in a creative way.
- As a user, I want to be able to access my daily horoscope, receive a personality analysis and take a compatibility test using AI, so that I can see what the stars have in store for me each day, and gain valuable insights into my personality and compatibility with others.

### Admin Stories
- As an admin, I want to be able to view a list of all registered users on the platform, so that I can keep track of user activity and identify any potential issues or concerns.
- As an admin, I want to be able to generate bar charts, polar charts, line charts, and pie charts based on the data analysis of dream categories in each country, so that I can easily visualize the data and see what is the most common category in each country.
- As an admin, I want to be able to get count of all registered and subscribed users on the platform, so that I can track the growth of the website over time.


<br><br>

<!-- Prototyping -->
<img src="./readme/title3.svg"/>

>I designed OneirAi using wireframes and mockups, iterating on the design until I reached the ideal layout for easy navigation and a seamless user experience.

### Wireframes


| Register Screen  | User Dashboard |  |
| ---| ---| ---|
| ![Landing](./readme/demo/Register_wireframe.png) | ![fsdaf](./readme/demo/Userdash_wireframe.png) | 

| Add Dream  | Interpret Dream |  |
| ---| ---| ---|
| ![Landing](./readme/demo/AddDream_wireframe.png) | ![fsdaf](./readme/demo/Interpretation_wireframe.png) | 



### Mockups

> | Landing                                      | Signup/Signin/UserPanel                                                                                        |
> | ------------------------------------------------- | -------------------------------------------- |
> | <img src="./readme/demo/Landing_mockup.png"/> | <img src="./readme/demo/SignUp_mockup.png" width="75%"  /> !<img src="./readme/demo/Login_mockup.png" width="75%" /> !<img src="./readme/demo/user_dash.png" width="75%" /> |
<!-- 
| Login screen  | SignUp Screen |  |
| ---| ---| ---|
| ![Landing](./readme/demo/Login_mockup.png) | ![fsdaf](./readme/demo/SignUp_mockup.png) |  -->

|| Add Dream |  Interpret Dream  |
| ---| ---| ---|
|  | ![fsdaf](./readme/demo/add_dream.png) | ![fsdaf](./readme/demo/interpret.png) |
<details><summary>See more mockups</summary>

|| Interpret Dream |  Visualize Dream |
| ---| ---| ---|
|  | ![fsdaf](./readme/demo/interpret.png) | ![fsdaf](./readme/demo/visualize.png) |

|| Change Password | Edit Profile |
| ---| ---| ---|
|  | ![fsdaf](./readme/demo/changepass.png) | ![fsdaf](./readme/demo/edit_prof.png) |

|| Admin Panel |  View Registered Users |
| ---| ---| ---|
|  | ![fsdaf](./readme/demo/admin_home.png) | ![fsdaf](./readme/demo/view-users.png) |

|| Pie Chart Analysis |  Bar Chart Analysis |
| ---| ---| ---|
|  | ![fsdaf](./readme/demo/pie-chart.png) | ![fsdaf](./readme/demo/bar-chart.png) |

<!-- || Landing Page  | Horoscope Page |  
| ---| ---| ---|
| | ![Landing](./readme/demo/Landing_mockup.png) | ![fsdaf](./readme/demo/horoscope.png) |  -->

</details>
#

<br><br>


<!-- Implementation -->
<img src="./readme/title4.svg"/>

> Using the wireframes and mockups as a guide, I implemented OneirAi app  with the following features:

### User Screens (Web)
|  | Landing Page |   |
| ---| ---| ---|
|  | ![fsdaf](./readme/gifs/landing_demo.gif) | |

|| Register |  Login |
| ---| ---| ---|
|  | ![fsdaf](./readme/gifs/register.gif) | ![fsdaf](./readme/gifs/login.gif) |

|| Add Dream |  Visualize Dream |
| ---| ---| ---|
|  | ![fsdaf](./readme/gifs/add_dream.gif) | ![fsdaf](./readme/gifs/visualize.gif) |

|| Interpret & Download Dream |  Search, Sort & Delete |
| ---| ---| ---|
|  | ![fsdaf](./readme/gifs/interpret.gif) | ![fsdaf](./readme/gifs/search_sort.gif) |

|| Edit Profile |  Change Password |
| ---| ---| ---|
|  | ![fsdaf](./readme/gifs/profile.gif) | ![fsdaf](./readme/gifs/changepass.gif) |


|| Horoscope Page |  Daily Horoscope |
| ---| ---| ---|
|  | ![fsdaf](./readme/gifs/horoscope_demo.gif) | ![fsdaf](./readme/gifs/daily_horo.gif) |

|| Personality Analysis |  Compatibility Test |
| ---| ---| ---|
|  | ![fsdaf](./readme/gifs/personality.gif) | ![fsdaf](./readme/gifs/compatibility.gif) |


|| Admin Panel |  Data Analysis: Charts |
| ---| ---| ---|
|  | ![fsdaf](./readme/gifs/admin.gif) | ![fsdaf](./readme/gifs/charts.gif) |

|| Subscribe |  Reset Password |
| ---| ---| ---|
|  | ![fsdaf](./readme/gifs/subscribe.gif) | ![fsdaf](./readme/gifs/reset.gif) |

|| Permissions |  Responsiveness |
| ---| ---| ---|
|  | ![fsdaf](./readme/gifs/error.gif) | ![fsdaf](./readme/gifs/resp.gif) |

<br><br>

<br><br>


<br><br>
<a id="implementation"></a>
<img src="./readme/title5.svg"/>
<a id="tech-stack"></a>

Here's a brief high-level overview of the tech stack OneirAi app uses:
- This project uses the [Laravel framework](https://laravel.com/). Laravel is a web application framework with expressive, elegant syntax.
- As database, MySQL was used.
- OneirAi uses the [React](https://reactjs.org/) library for the front-end. React makes it painless to create interactive UIs, is component-based and is reusable.

<br><br>

<img src="./readme/title6.svg"/>


> These are the instructions on setting up this project locally.
To get a local copy up and running follow these simple steps.

### Prerequisites

This is a list of things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```
* Apache, PHP, MySQL [Download](https://www.apachefriends.org/)
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