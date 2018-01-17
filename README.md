# dronut-starter
In order to setup your project repository, complete the following steps during Sprint 0:

### Repository Setup
1. Create a new GitHub repository for your team using [https://classroom.github.com/g/PFQUDYxv](GitHub classroom).  Subsequent members should choose to join an existing team using the same link.

### Travis CI
1. Enable travis-ci.com for this repository.  To do this, go to the [travis website](travis-ci.com), and grant Travis permissions over your repository.

### Choose a Web Framework and Install It
Within the NodeJS runtime, there a many frameworks for creating
server applications.  For the purposes of this assignment, there are two options you should consider:

* <b>Option 1: Express</b><br>
The [Express Framework](https://expressjs.com/) is a general-purpose web development framework with widespread adoption.

* <b>Option 2: Loopback</b><br>
The [Loopback Framework](https://loopback.io/) is a purpose-built REST API framework, with a smaller user base.

As a deliverable of sprint 0, you will be asked to compare these frameworks.  You should familiarize yourself with both projects in order to justify your decision.  Once the decision is made, install it in your groups repository.

### QA Tools
1. You should install a linter for your repository, to help manage code style.  I highly recommend [eslint](https://eslint.org/docs/user-guide/getting-started).

2. Because NodeJS projects have many dependencies, it is massively beneficial to use a tool to detect dependency updates and alert you as to potential vulnerabilities.  You should consider using [GreenKeeper](https://greenkeeper.io/) [David](https://david-dm.org/) or [requires.io](https://requires.io/).

3. You should setup a test framework within your application to help with later test-driven development.  I would highly suggesting using the [Mocha](https://mochajs.org/) framework together with [Chai](http://chaijs.com/), regardless of which web framework you choose.

**All of your QA tools should be integrated with TravisCI, and documented in your project's readme.**

### Docker
1. Although Docker should already be configured (see `Dockerfile` and `docker-compose.yml`) as neccessary, you may need to install the Docker Daemon on your machine to properly complete the assignment.  

### Deployment
1. Create an Azure account using your CMU credentials.  In recitation, we will help you in obtaining credits for running your app.

2. Using your Azure credentials, follow [these instructions](https://docs.microsoft.com/en-us/azure/virtual-machines/linux/docker-machine) to manually setup a Virtual Machine suitable for running Docker **with the following considerations**:
   * Instead of `myvm` use `project1` as your Docker Machine name.
   * **stop before the step "run a container"**.
   * Instead, run `mkdir ./azure && cp -r "$DOCKER_CERT_PATH" ./azure`to copy your deployment certificates into your repository.  This should enable automatic deployment via Travis CI.
