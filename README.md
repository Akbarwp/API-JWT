# Login & Register JWT ReactJS

Login Register JWT ReactJS is a website that provides login and registration features for users, enabling secure and efficient access. Built with Laravel and ReactJS, this site offers fast and responsive authentication, delivering a seamless user experience for managing their accounts.

## Tech Stack

- **Laravel 9**
- **MySQL Database**
- **ReactJS - Create React App**
- **[tymon/jwt-auth](https://jwt-auth.readthedocs.io/en/develop/laravel-installation/)**

## Features

- Main features available in this application:
  - Login
  - Register

## Installation

Follow the steps below to clone and run the project in your local environment:

1. Clone repository:

    ```bash
    git clone https://github.com/Akbarwp/API-JWT.git
    ```

2. Install dependencies use Composer and NPM:

    ```bash
    composer install
    npm install
    ```

3. Copy file `.env.example` to `.env`:

    ```bash
    cp .env.example .env
    ```

4. Generate application key:

    ```bash
    php artisan key:generate
    ```

5. Setup database in the `.env` file:

    ```plaintext
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=logreg_react
    DB_USERNAME=root
    DB_PASSWORD=
    ```

6. Run migration database:

    ```bash
    php artisan migrate
    ```

7. Run website:

    ```bash
    npm run start
    php artisan serve
    ```

## Screenshot

- ### **Login page**

<img src="https://github.com/user-attachments/assets/9ac01a53-cff7-47e2-a8af-7849469c854b" alt="Halaman Login" width="" />
<br><br>

- ### **Register page**

<img src="https://github.com/user-attachments/assets/8a8e4332-3bda-49cf-9387-46f730ce124f" alt="Halaman Register" width="" />
<br><br>
