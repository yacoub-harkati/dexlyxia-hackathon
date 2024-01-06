#!/bin/bash

# for now there is no difference between dev and prod
# but in the future there will be
if [ "$MODE" = "dev" ]; then
    echo "making migrations"
    python manage.py makemigrations
    echo "migrating"
    python manage.py migrate
    python manage.py collectstatic --noinput
    manage.py loaddata fixtures/child.json
elif [ "$MODE" = "prod" ]; then
    echo "making migrations"
    python manage.py makemigrations
    echo "migrating"
    python manage.py migrate
    python manage.py collectstatic --noinput
    manage.py loaddata fixtures/child.json
fi
exec "$@"
