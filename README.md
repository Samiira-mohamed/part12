# Full Stack Open - Part 12 (Containers)

Submission repository for Part 12 of Full Stack Open.

## Exercises 1-21

- `answers/` contains the answers for the non-coding exercises
- `todo-app/` contains the todo application and its container configurations
- `todo-tests/` contains the end to end tests

## Exercises 22 and 23: my own full stack app (Phonebook)

My containerized development and production environments are in the `my-app/` directory.

The source code of the app comes from these repositories (both are public):

- Frontend (Part 2): https://github.com/Samiira-mohamed/part-2 (the `phonebook/step11` directory)
- Backend (Part 3): https://github.com/Samiira-mohamed/-part-3-phonebook-backend-

Structure of `my-app/`:

- `frontend/dev.Dockerfile` and `frontend/Dockerfile`
- `backend/dev.Dockerfile` and `backend/Dockerfile`
- `nginx.dev.conf` and `nginx.conf`
- `docker-compose.dev.yml` and `docker-compose.yml`

Run the development environment: `docker compose -f docker-compose.dev.yml up --build`

Run the production environment: `docker compose up --build`

The app is available at http://localhost:8080