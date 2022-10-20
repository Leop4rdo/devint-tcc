# <DevInt_ API

## Entities
- [x] Article
- [x] Company
- [x] Dev
- [x] Auth
- [x] SeniorityLevel
- [x] Skill
- [x] CareerFocus
- [x] Comment
- [x] Post
- [x] Project
- [x] PasswordResetToken
- [x] SocialLink

## Installation Guide

### 0 - pre-requisites
- install docker
- install node
- install npm

### 1 - Setup database
from repository root folder go to _docker/database_ and run:

<code>
    docker compose up -d
</code>

Or

<code>
    docker-compose up -d
</code>

and then run the following commands

<code>docker exec -it database-pgdb-1 psql</code>
<code>CREATE DATABASE devint_db</code>

### 2 - Setup .env

from backend root folder copy and paste <a>.env.example</a>
renaming it to _.env_ and then run:

<code>
    npm i
</code>
