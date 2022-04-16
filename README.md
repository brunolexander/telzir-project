# telzir-project

![Preview](preview/preview.png)
<br>
The challenge is to build a website for a hypothetical telecommunications company, where users can calculate the cost of a phone call.

## Running the project

The project can be run with Docker, you can still install the dependencies manually if you wish.
<br>
Please refer to [docker docs](https://docs.docker.com/get-docker/) for installation instructions.
<hr>

Clone the repo
<pre>
git clone https://github.com/brunolexander/telzir-project.git
</pre>
<br>

With your favorite command-line interface, navigate to the project's directory
<pre>
cd path/to/project
</pre>
<br>

Build the image and run the containers
<pre>
docker-compose up -d
</pre>
<br>

Bash into the app container and run the database migrations
<pre>
docker exec -t -i app bash
php artisan migrate --seed
</pre>
<br>

Access http://localhost:3000 in the web browser.
<br>

## Dependencies

Note that the dependencies do not need to be installed if you use docker to run the application.
* PHP 8.1.1
* Composer 2.1.11
* MySQL 8.0.28
* Node.js 16.14.2