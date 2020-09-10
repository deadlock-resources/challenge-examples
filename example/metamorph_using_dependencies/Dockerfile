FROM registry.e-biz.fr/deadlock/deadlock-challenges-runner/base:2.0

# files specified in 'entry.rs'
COPY solution.js .
COPY input.js .
COPY toast .

# mandatory stuff
COPY runner .
COPY entry.rs .
COPY src/template/ template/
RUN install-dependencies.sh


