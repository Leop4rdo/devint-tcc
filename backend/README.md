# <DevInt_ API

## Installation Guide

### 1 - Setup database
from repository root folder go to _docker/database_ and run:

<code>
    docker compose up
</code>

Or

<code>
    docker-compose up
</code>

and then run the following commands

<code>
    docker exec -it pgdb psql 
    CREATE DATABASE devint_db
</code>

### 2 - Setup .env

from backend root folder copy and paste <a>.env.example</a>
renaming it to _.env_ and then run:

<code>
    npm i
    npm run dev
</code>


