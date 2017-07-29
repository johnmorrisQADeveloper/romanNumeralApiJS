# romanNumeralApiJS
Roman Numeral api - test project

# To run the test, with html reports
mocha --reporter mochawesome

# To run with standard mocha with no reports
mocha

# Build a docker container from dockerfile
cd romansJS
docker build -t "romanApi:johnmorris" .

# Run docker container and go into bash prompt
docker run -it romanApi:john /bin/bash

# Use run commands to run the test file.

Note: I don't own the webservice!
