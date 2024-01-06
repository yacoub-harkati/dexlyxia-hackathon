#!/bin/bash

# for now there is no difference between dev and prod
# but in the future there will be
if [ "$MODE" = "dev" ]; then
    echo "making migrations"
    python manage.py makemigrations
    echo "migrating"
    python manage.py migrate
    python manage.py collectstatic --noinput
elif [ "$MODE" = "prod" ]; then
    echo "making migrations"
    python manage.py makemigrations
    echo "migrating"
    python manage.py migrate
    python manage.py collectstatic --noinput
fi
exec "$@"
