FROM php:8.1.1-apache

ARG user
ARG uid

RUN apt-get update && apt-get install -y zip unzip

# Install php dependencies
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
RUN docker-php-ext-install pdo pdo_mysql

# Clear cached files
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Replace apache vhosts
RUN rm /etc/apache2/sites-enabled/000-default.conf
COPY app.conf /etc/apache2/sites-enabled

# Create user to run composer commands
RUN useradd -G www-data -u $uid -d /home/$user $user
RUN mkdir -p /home/$user/.composer && \
    chown -R $user:$user /home/$user

WORKDIR /var/www/app

ADD . .

# Enable mod_rewrite
RUN a2enmod rewrite

# Set up permissions
RUN chown -R $user:www-data .
RUN find . -type f -exec chmod 644 {} \; 
RUN find . -type d -exec chmod 775 {} \;

USER $user

# Install composer dependencies
RUN composer install --no-interaction --no-plugins --no-scripts