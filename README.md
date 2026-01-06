# Sample Playwright Project

## Overview

This is an example of End-To-End (E2E) Tests/Acceptance Test
Driven Development (ATDD) using Playwright.

**However, it also provides a somewhat extensible framework that
can be reused by replacing the existing tests.**

## Running

The easiest way to run the tests is with the docker compose
framework using the `dockercomposerun` script.

1. Ensure Docker is running
2. From the project root directory, run the `dockercomposerun`
   script with the defaults...

   ```sh
   ./script/dockercomposerun
   ```

### Building Your Own Deployment Image

You can also build and run your own deployment image.

1. Build your deployment image supplying a name (tag)
   for the image

   ```sh
   docker build --no-cache -t browsertests .
   ```

2. Run your deployment image in the docker compose
   environment using the `-c` (CI environment),
   specifying your deployment image
   with `BROWSERTESTS_IMAGE`

   ```sh
   BROWSERTESTS_IMAGE=browsertests ./script/dockercomposerun -c
   ```

## To Develop Using the Container-Based Development Environment

The easiest way to run the containerized development environment is with
the docker compose framework using the `dockercomposerun` script with the
`-d` (development environment) option...

```sh
./script/dockercomposerun -d
```

This will pull and run the latest development environment image of this
project.

### Building Your Own Development Environment Image

You can also build and run your own development environment image.

1. Build your development environment image specifying the `devenv` build
   stage as the target and supplying a name (tag) for the image.

   ```sh
   docker build --no-cache --target devenv -t browsertests-dev .
   ```

2. Run your development environment image in the docker compose
   environment and specify your development environment image
   with `BROWSERTESTS_IMAGE`

   ```sh
   BROWSERTESTS_IMAGE=browsertests-dev ./script/dockercomposerun -d
   ```

### Specifying the Source Code Location

To use another directory as the source code for the development
environment, set the `BROWSERTESTS_SRC` environment variable.
For example...

```sh
BROWSERTESTS_SRC=${PWD} BROWSERTESTS_IMAGE=browsertests-dev ./script/dockercomposerun -d
```

### Running the Tests and the Playwright (Debugging) UI

To run the tests or the Playwright UI in the development
use the `run` script.

If you are running interactively (command line) in the development
environment...

* To run the **tests**...

  ```sh
  ./script/run tests
  ```

* To show the **Playwright Test Report**...

  1. Run the show report...

     ```sh
     ./script/run show-report
     ```

  2. View the report at http://localhost:9323/

* To run the **Playwright UI to see and debug the tests**...

  1. Run the UI...

     ```sh
     ./script/run ui
     ```

  2. Operate in the UI at http://localhost:8080/

---
