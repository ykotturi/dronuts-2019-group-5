# dronut-starter
In order to get ready to write productive code, complete the following steps during Sprint 0:

### Repository Setup
1. Create a new GitHub repository for your team using [Github classroom](https://classroom.github.com/g/PFQUDYxv).  Subsequent members should choose to join an existing team using the same link.
TODO: expicitly talk about putting it in our class org

2. In addition, you should setup any tools needed for collaboration, issue tracking and project managment; Slack, Jira, GitHub Issues, Asana, whatever it is your team would like to use.

### Travis CI
1. Enable travis-ci.com for this repository.  To do this, go to the [travis website](https://travis-ci.com), and grant Travis permissions over your repository.

### Initialize NodeJS/NPM
1. If you haven't already, install NodeJS and NPM on your computer.

2. Initialize your repository for NPM by running `npm init`.  This will generate a `package.json` file in your repository.

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

      > Success Condition:
      > ```
      > $ npm test
      > > dronut-team-test@1.0.0 test /home/derekbro/Projects/dronut-starter
      > > eslint .
      >  ```

2. Because NodeJS projects have many dependencies, it is massively beneficial to use a tool to detect dependency updates and alert you as to potential vulnerabilities.  Normally, I would recommend using a SaaS tool like [GreenKeeper](https://greenkeeper.io/) or [requires.io](https://requires.io/).  However, as your repository is private, these tools require payment.  For this project you should install [npm-check](https://www.npmjs.com/package/npm-check).

      > Success Condition:
      > ```
      > $ npm test
      > > dronut-team-test@1.0.0 test /home/derekbro/Projects/dronut-starter
      > > eslint . && npm-check
      >
      > ❤️  Your modules look amazing. Keep up the great work. ❤️
      >  ```

3. You should setup a test framework within your application to help with later test-driven development.  I would highly suggesting using the [Mocha](https://mochajs.org/) framework together with [Chai](http://chaijs.com/), regardless of which web framework you choose.  Once installed, write a single test, which doesn't actually test anything (besides that your tests run).

      > Success Condition:
      > ```
      > $ npm test
      > > dronut-team-test@1.0.0 test /home/derekbro/Projects/dronut-starter
      > > mocha test/index.js && eslint . && npm-check
      > 
      >  Sample Test Suite
      >   ✓ Should be able to run a test
      >
      > 1 passing (5ms)
      >
      > ❤️  Your modules look amazing. Keep up the great work. ❤️
      >  ```

4. Verify that the above tools are executed by TravisCI.

5. Document the above tools in your README.  I also recommend [embedding the build status image](https://docs.travis-ci.com/user/status-images/) from Travis CI, to make it easier to track the status of your build.

### Docker
1. Although Docker should already be configured (see `Dockerfile` and `docker-compose.yml`) as neccessary, you may need to install the Docker Daemon on your machine to properly complete the assignment.  

### Deployment
1. Create an Azure account using your CMU credentials.  In recitation, we will help you in obtaining credits for running your app.

2. Using your Azure credentials, follow [these instructions](https://docs.microsoft.com/en-us/azure/virtual-machines/linux/docker-machine) to manually setup a Virtual Machine suitable for running Docker **with the following considerations**:
   * Instead of `myvm` use `project1` as your Docker Machine name.
   * **stop before the step "run a container"**.
   * Instead, run `mkdir ./azure && cp -r "$DOCKER_CERT_PATH" ./azure`to copy your deployment certificates into your repository.  This should enable automatic deployment via Travis CI.
