# Telzir Project

A simple website created with PHP, Node.js and MySQL for a hypothetical telecommunications company, where users can calculate the cost of a phone call.

![Preview](preview/preview.png)

## Built with
* Laravel 9
* Bootstrap 5.1
* React 17.0
* TypeScript 4.5

## Running the project

The project can be run with Docker, you can still install the dependencies manually if you wish.
<br>
Please refer to [docker docs](https://docs.docker.com/get-docker/) for installation instructions.
<hr>

1. Clone the repo
  ```
  git clone https://github.com/brunolexander/telzir-project.git
  ```
<br>

2. Navigate to the project's directory
  ```
  cd telzir-project
  ```
<br>

3. Build the image and run the containers
  ```
  docker-compose up -d
  ```
<br>

4. Bash into the app container and run the database migrations
  ```
  docker exec -t -i app bash
  php artisan migrate --seed
  ```
<br>

5. Access http://localhost:3000 in the web browser.

You may get an ERR_EMPTY_RESPONSE error once accessing the link after building the image, this occurs when react is building the static resources. Wait for a few seconds and reload the page, no further actions are required.


## Dependencies

Note that the dependencies do not need to be installed if you use docker to run the application.
* PHP 8.1.1
* Composer 2.1.11
* MySQL 8.0.28
* Node.js 16.14.2