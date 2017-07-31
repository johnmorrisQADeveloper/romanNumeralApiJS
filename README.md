# Roman Numeral Api JS
  
  Roman Numeral API - Test Project.

    This project tests the roman numeral web api service, checks if the application has any issues.
    Project has two test files, one for positive tests and one for negative tests.
    Eg: Numeral 12 should return XII

# Run test to produce html test report
    mocha --reporter mochawesome

# Run test with standard mocha
    mocha

# Run a test with debugger on
    mocha ./test/AlternativePathTest.js --printDebug

# Build a docker container from dockerfile
    cd romansJS
    docker build -t "romanApi:johnmorris" .

# Run docker container and go into bash prompt
    docker run -it romanApi:john /bin/bash

NOTE: Use run commands to run within the container.
