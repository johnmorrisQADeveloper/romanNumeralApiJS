# Roman Numeral Api JS
  
  Roman Numeral API - Test Project.

    This project tests the roman numeral web api service, to check if the application has any issues.
    Added some test to check different scenarios.

# Run test to produce html test report
    mocha --reporter mochawesome

# Run test with standard mocha
    mocha

# Build a docker container from dockerfile
    cd romansJS
    docker build -t "romanApi:johnmorris" .

# Run docker container and go into bash prompt
    docker run -it romanApi:john /bin/bash

# Use run commands to run the test file.
