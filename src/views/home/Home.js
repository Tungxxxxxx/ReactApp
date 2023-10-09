import React from "react";
import { withRouter } from "react-router";

class Home extends React.Component {
  componentDidMount() {
    // setTimeout(() => {
    //   this.props.history.push("/todo");
    // }, 5000);
  }
  render() {
    // console.log(">>> Check props", this.props);
    return (
      <div>
        <div className="theme-doc-markdown markdown">
          <header>
            <h1>Contributing Overview</h1>
          </header>
          <p>
            Thank you for your interest in contributing to React Native! From
            commenting on and triaging issues, to reviewing and sending Pull
            Requests, all contributions are welcome. We aim to build a vibrant
            and inclusive{" "}
            <a
              href="https://github.com/facebook/react-native/blob/main/ECOSYSTEM.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              ecosystem of partners, core contributors, and community
            </a>{" "}
            that goes beyond the main React Native GitHub repository.
          </p>
          <p>
            The{" "}
            <a
              href="https://opensource.guide/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Source Guides
            </a>{" "}
            website has a collection of resources for individuals, communities,
            and companies who want to learn how to run and contribute to an open
            source project.
          </p>
          <p>
            Contributors and people new to open source alike will find the
            following guides especially useful:
          </p>
          <ul>
            <li>
              <a
                href="https://opensource.guide/how-to-contribute/"
                target="_blank"
                rel="noopener noreferrer"
              >
                How to Contribute to Open Source
              </a>
            </li>
            <li>
              <a
                href="https://opensource.guide/building-community/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Building Welcoming Communities
              </a>
            </li>
          </ul>
          <h3
            className="anchor anchorWithStickyNavbar_JmGV"
            id="code-of-conduct"
          >
            Code of Conduct
            <a
              href="#code-of-conduct"
              className="hash-link"
              aria-label="Direct link to Code of Conduct"
              title="Direct link to Code of Conduct"
            >
              ​
            </a>
          </h3>
          <p>
            As a reminder, all contributors are expected to adhere to the{" "}
            <a
              href="https://github.com/facebook/react-native/blob/HEAD/CODE_OF_CONDUCT.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code of Conduct
            </a>
            .
          </p>
          <h2
            className="anchor anchorWithStickyNavbar_JmGV"
            id="ways-to-contribute"
          >
            Ways to Contribute
            <a
              href="#ways-to-contribute"
              className="hash-link"
              aria-label="Direct link to Ways to Contribute"
              title="Direct link to Ways to Contribute"
            >
              ​
            </a>
          </h2>
          <p>
            If you are eager to start contributing code right away, we have a
            list of{" "}
            <a
              href="https://github.com/facebook/react-native/labels/good%20first%20issue"
              target="_blank"
              rel="noopener noreferrer"
            >
              good first issues
            </a>{" "}
            that contain bugs which have a relatively limited scope. As you gain
            more experience and demonstrate a commitment to evolving React
            Native, you may be granted issue management permissions in the
            repository.
          </p>
          <p>
            There are other ways you can contribute without writing a single
            line of code. Here are a few things you can do to help out:
          </p>
          <ol>
            <li>
              <p>
                <strong>Replying and handling open issues.</strong>
              </p>
              <p>
                We get a lot of issues every day, and some of them may lack
                necessary information. You can help out by guiding people
                through the process of filling out the issue template, asking
                for clarifying information, or pointing them to existing issues
                that match their description of the problem. We cover more about
                this process on the{" "}
                <a href="/contributing/triaging-github-issues">
                  Triaging GitHub Issues
                </a>{" "}
                page.
              </p>
            </li>
            <li>
              <p>
                <strong>Reviewing pull requests for the docs.</strong>
              </p>
              <p>
                Reviewing{" "}
                <a
                  href="https://github.com/facebook/react-native-website/pulls"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  documentation updates
                </a>{" "}
                can be as simple as checking for spelling and grammar. If you
                encounter situations that can be explained better in the docs,
                click <strong>Edit</strong> at the top of most docs pages to get
                started with your own contribution.
              </p>
            </li>
            <li>
              <p>
                <strong>Help people write test plans.</strong>
              </p>
              <p>
                Some pull requests sent to the main repository may lack a proper
                test plan. These help reviewers understand how the change was
                tested, and can speed up the time it takes for a contribution to
                be accepted.
              </p>
            </li>
          </ol>
          <p>
            Each of these tasks is highly impactful, and maintainers will
            greatly appreciate your help.
          </p>
          <h3
            className="anchor anchorWithStickyNavbar_JmGV"
            id="our-development-process"
          >
            Our Development Process
            <a
              href="#our-development-process"
              className="hash-link"
              aria-label="Direct link to Our Development Process"
              title="Direct link to Our Development Process"
            >
              ​
            </a>
          </h3>
          <p>
            We use GitHub issues and pull requests to keep track of bug reports
            and contributions from the community. All changes from engineers at
            Meta will sync to{" "}
            <a
              href="https://github.com/facebook/react-native"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
            through a bridge with Meta's internal source control. Changes from
            the community are handled through GitHub pull requests.
          </p>
          <p>
            Once a change made on GitHub is approved, it will first be imported
            into Facebook's internal source control and tested against
            Facebook's codebase. Once merged at Facebook, the change will
            eventually sync back to GitHub as a single commit once it has passed
            Facebook's internal tests.
          </p>
          <p>
            You can learn more about the contribution process in the following
            documents:
          </p>
          <ul>
            <li>
              <a href="/contributing/triaging-github-issues">
                Triaging GitHub Issues
              </a>
            </li>
            <li>
              <a href="/contributing/managing-pull-requests">
                Managing Pull Requests
              </a>
            </li>
          </ul>
          <p>
            We also have a thriving community of contributors who would be happy
            to help you get set up. You can reach out to the React Native team
            through{" "}
            <a
              href="https://twitter.com/reactnative"
              target="_blank"
              rel="noopener noreferrer"
            >
              @ReactNative
            </a>
            .
          </p>
          <h3 className="anchor anchorWithStickyNavbar_JmGV" id="repositories">
            Repositories
            <a
              href="#repositories"
              className="hash-link"
              aria-label="Direct link to Repositories"
              title="Direct link to Repositories"
            >
              ​
            </a>
          </h3>
          <p>
            The main repository contains the React Native framework itself, and
            it is here where we keep track of bug reports and manage pull
            requests.
          </p>
          <p>
            There are a few other repositories you might want to familiarize
            yourself with:
          </p>
          <ul>
            <li>
              <strong>React Native website</strong> which contains the source
              code for the website, including the documentation, located{" "}
              <a
                href="https://github.com/facebook/react-native-website"
                target="_blank"
                rel="noopener noreferrer"
              >
                in this repository
              </a>
              .
            </li>
            <li>
              <strong>Releases</strong> conversations are happening{" "}
              <a
                href="https://github.com/reactwg/react-native-releases/discussions"
                target="_blank"
                rel="noopener noreferrer"
              >
                in this discussion repo
              </a>
              .
            </li>
            <li>
              <strong>Changelog</strong> for the releases can be found{" "}
              <a
                href="https://github.com/facebook/react-native/blob/main/CHANGELOG.md"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
            </li>
            <li>
              <strong>Discussions</strong> about React Native take place in the{" "}
              <a
                href="https://github.com/react-native-community/discussions-and-proposals"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discussions and Proposals
              </a>{" "}
              repository.
            </li>
            <li>
              <strong>Discussions</strong> about the new architecture of React
              Native take place in the{" "}
              <a
                href="https://github.com/reactwg/react-native-new-architecture"
                target="_blank"
                rel="noopener noreferrer"
              >
                React Native New Architecture Working Group
              </a>{" "}
              repository.
            </li>
            <li>
              <strong>High-quality plugins</strong> for React Native can be
              found throughout the{" "}
              <a
                href="https://reactnative.directory"
                target="_blank"
                rel="noopener noreferrer"
              >
                React Native Directory
              </a>{" "}
              website.
            </li>
          </ul>
          <p>
            Browsing through these repositories should provide some insight into
            how the React Native open source project is managed.
          </p>
          <h2 className="anchor anchorWithStickyNavbar_JmGV" id="github-issues">
            GitHub Issues
            <a
              href="#github-issues"
              className="hash-link"
              aria-label="Direct link to GitHub Issues"
              title="Direct link to GitHub Issues"
            >
              ​
            </a>
          </h2>
          <p>
            We use GitHub issues to track bugs exclusively. We have documented
            our issue handling processes in the{" "}
            <a href="/contributing/triaging-github-issues">
              Triaging Issues Page
            </a>
            .
          </p>
          <h3 className="anchor anchorWithStickyNavbar_JmGV" id="security-bugs">
            Security Bugs
            <a
              href="#security-bugs"
              className="hash-link"
              aria-label="Direct link to Security Bugs"
              title="Direct link to Security Bugs"
            >
              ​
            </a>
          </h3>
          <p>
            Meta has a{" "}
            <a
              href="https://www.facebook.com/whitehat/"
              target="_blank"
              rel="noopener noreferrer"
            >
              bounty program
            </a>{" "}
            for the safe disclosure of security bugs. In those cases, please go
            through the process outlined on that page and do not file a public
            issue.
          </p>
          <h2
            className="anchor anchorWithStickyNavbar_JmGV"
            id="helping-with-documentation"
          >
            Helping with Documentation
            <a
              href="#helping-with-documentation"
              className="hash-link"
              aria-label="Direct link to Helping with Documentation"
              title="Direct link to Helping with Documentation"
            >
              ​
            </a>
          </h2>
          <p>
            The React Native documentation is hosted as part of the React Native
            website repository. The website is built using{" "}
            <a
              href="https://docusaurus.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Docusaurus
            </a>
            . If there's anything you'd like to change in the docs, you can get
            started by clicking on the "Edit" button located on the upper right
            of most pages in the website.
          </p>
          <p>
            If you are adding new functionality or introducing a change in
            behavior, we will ask you to update the documentation to reflect
            your changes.
          </p>
          <h3
            className="anchor anchorWithStickyNavbar_JmGV"
            id="contributing-to-the-blog"
          >
            Contributing to the Blog
            <a
              href="#contributing-to-the-blog"
              className="hash-link"
              aria-label="Direct link to Contributing to the Blog"
              title="Direct link to Contributing to the Blog"
            >
              ​
            </a>
          </h3>
          <p>
            The React Native blog is generated{" "}
            <a
              href="https://github.com/facebook/react-native-website/tree/HEAD/website/blog"
              target="_blank"
              rel="noopener noreferrer"
            >
              from the Markdown sources for the blog
            </a>
            .
          </p>
          <p>
            Please open an issue in the React Native website repository or tag
            us on{" "}
            <a
              href="https://twitter.com/reactnative"
              target="_blank"
              rel="noopener noreferrer"
            >
              @ReactNative on Twitter
            </a>{" "}
            and get the go-ahead from a maintainer before writing an article
            intended for the React Native blog. In most cases, you might want to
            share your article on your own blog or writing medium instead. It's
            worth asking, though, in case we find your article is a good fit for
            the blog.
          </p>
          <p>
            We recommend referring to the <code>react-native-website</code>{" "}
            repository{" "}
            <a
              href="https://github.com/facebook/react-native-website#-contributing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Readme file
            </a>{" "}
            to learn more about contributing to the website in general.
          </p>
          <h2
            className="anchor anchorWithStickyNavbar_JmGV"
            id="contributing-code"
          >
            Contributing Code
            <a
              href="#contributing-code"
              className="hash-link"
              aria-label="Direct link to Contributing Code"
              title="Direct link to Contributing Code"
            >
              ​
            </a>
          </h2>
          <p>
            Code-level contributions to React Native generally come in the form
            of{" "}
            <a
              href="https://help.github.com/en/articles/about-pull-requests"
              target="_blank"
              rel="noopener noreferrer"
            >
              pull requests
            </a>
            . These are done by forking the repo and making changes locally.
          </p>
          <p>
            Directly in the repo, there is the{" "}
            <a
              href="https://github.com/facebook/react-native/tree/main/packages/rn-tester"
              target="_blank"
              rel="noopener noreferrer"
            >
              <code>rn-tester</code> app
            </a>{" "}
            that you can install on your device (or simulators) and use to test
            the changes you're making to React Native sources.
          </p>
          <p>
            The process of proposing a change to React Native can be summarized
            as follows:
          </p>
          <ol>
            <li>
              Fork the React Native repository and create your branch from{" "}
              <code>main</code>.
            </li>
            <li>
              Make the desired changes to React Native sources. Use the{" "}
              <code>packages/rn-tester</code> app to test them out.
            </li>
            <li>If you've added code that should be tested, add tests.</li>
            <li>
              If you've changed APIs, update the documentation, which lives in{" "}
              <a
                href="https://github.com/facebook/react-native-website/"
                target="_blank"
                rel="noopener noreferrer"
              >
                separate repo
              </a>
              .
            </li>
            <li>
              Ensure the test suite passes, either locally or on CI once you
              opened a pull request.
            </li>
            <li>
              Make sure your code lints (for example via{" "}
              <code>yarn lint --fix</code>).
            </li>
            <li>Push the changes to your fork.</li>
            <li>Create a pull request to the React Native repository.</li>
            <li>Review and address comments on your pull request.</li>
            <li>
              A bot may comment with suggestions. Generally we ask you to
              resolve these first before a maintainer will review your code.
            </li>
            <li>
              If changes are requested and addressed, please{" "}
              <a
                href="https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review"
                target="_blank"
                rel="noopener noreferrer"
              >
                request review
              </a>{" "}
              to notify reviewers to take another look.
            </li>
            <li>
              If you haven't already, please complete the{" "}
              <a href="/contributing/contribution-license-agreement">
                Contributor License Agreement
              </a>{" "}
              ("CLA").{" "}
              <strong>
                <a
                  href="https://code.facebook.com/cla"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Complete your CLA here.
                </a>
              </strong>
            </li>
          </ol>
          <p>
            If all goes well, your pull request will be merged. If it is not
            merged, maintainers will do their best to explain the reason why.
          </p>
          <h3
            className="anchor anchorWithStickyNavbar_JmGV"
            id="step-by-step-guide"
          >
            Step-by-step Guide
            <a
              href="#step-by-step-guide"
              className="hash-link"
              aria-label="Direct link to Step-by-step Guide"
              title="Direct link to Step-by-step Guide"
            >
              ​
            </a>
          </h3>
          <p>
            Whenever you are ready to contribute code, check out our{" "}
            <a href="/contributing/how-to-open-a-pull-request">
              step-by-step guide to sending your first pull request
            </a>
            , or read the{" "}
            <a href="/contributing/how-to-contribute-code">
              How to Contribute Code
            </a>{" "}
            page for more details.
          </p>
          <h3 className="anchor anchorWithStickyNavbar_JmGV" id="tests">
            Tests
            <a
              href="#tests"
              className="hash-link"
              aria-label="Direct link to Tests"
              title="Direct link to Tests"
            >
              ​
            </a>
          </h3>
          <p>
            Tests help us prevent regressions from being introduced to the
            codebase. The GitHub repository is continuously tested using
            CircleCI, the results of which are available through the Checks
            functionality on{" "}
            <a
              href="https://github.com/facebook/react-native/commits/HEAD"
              target="_blank"
              rel="noopener noreferrer"
            >
              commits
            </a>{" "}
            and pull requests.
          </p>
          <p>
            You can learn more about running and writing tests on the{" "}
            <a href="/contributing/how-to-run-and-write-tests">
              How to Run and Write Tests
            </a>{" "}
            page.
          </p>
          <h2
            className="anchor anchorWithStickyNavbar_JmGV"
            id="community-contributions"
          >
            Community Contributions
            <a
              href="#community-contributions"
              className="hash-link"
              aria-label="Direct link to Community Contributions"
              title="Direct link to Community Contributions"
            >
              ​
            </a>
          </h2>
          <p>
            Contributions to React Native are not limited to GitHub. You can
            help others by sharing your experience using React Native, whether
            that is through blog posts, presenting talks at conferences, or
            simply sharing your thoughts on Twitter and tagging @ReactNative.
          </p>
        </div>
      </div>
    );
  }
}
export default withRouter(Home);
