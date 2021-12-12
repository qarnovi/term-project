<template>
  <header>
    <div class="header-wrap">
      <h1>Resume</h1>
    </div>
  </header>
  <section class="summary-section">
    <h3>Summary:</h3>
    <ul>
      <li>
        10+ years of experience in <strong>Quality Assurance</strong> of Manual
        and <strong>Automated</strong> testing of Web based and Client Server
        applications.
      </li>
      <li>
        Excellent understanding of <strong>SDLC, STLC</strong>, Waterfall and
        <strong>Agile Scrum</strong> Methodologies.
      </li>
      <li>
        Experience in analyzing and prioritizing
        <strong>Sprint Backlog</strong> and providing legitimate estimates in
        Sprint-Grooming and -Planning sessions.
      </li>
      <li>
        Experience in creating <strong>Test Plan, Test Cases</strong> and
        <strong>Test Data</strong> according to the Requirement document and
        coordinating in User Acceptance Testing.
      </li>
      <li>
        Experience in testing <strong>Enterprise Applications</strong> deployed
        in <strong>Google Cloud</strong> and <strong>AWS</strong>.
      </li>
      <li>
        Proficiency in <strong>Object Oriented Programming</strong> with
        <strong>Java</strong>: Inheritance, Abstraction, Polymorphism,
        Encapsulation.
      </li>
      <li>
        Deep knowledge of using <strong>JUnit</strong> and
        <strong>TestNG</strong> to organize the flow of scripts by using
        Annotations and also performing parallel executions in various platforms
        and browsers.
      </li>
      <li>
        Excellent ability in developing <strong>BDD</strong> scripts with
        <strong>Cucumber</strong> and writing step definitions for behavior
        using <strong>Gherkin</strong> language.
      </li>
      <li>
        Proficiency in using <strong>Continuous Integration</strong> tools and
        creating <strong>Pipelines</strong> for Continuous Deployment and
        Testing: <strong>Jenkins</strong> and
        <strong>Version Control Systems.</strong>
      </li>
      <li>
        Solid ability on managing JAVA automation projects using build tools
        like <strong>Maven</strong> and <strong>Gradle</strong>.
      </li>
      <li>
        Applied knowledge and experience in
        <strong>Test Driven Development</strong> and
        <strong>Behavior Driven Development</strong>.
      </li>
      <li>
        Proficient in managing and maintaining existing
        <strong>Java</strong> and
        <strong>Selenium WebDriver/Rest Assured</strong> based
        <strong>Data Driven, Keyword Driven</strong> and
        <strong>Hybrid</strong> test automation frameworks.
      </li>
      <li>
        Confident in designing and developing
        <strong>new custom UI and API test automation frameworks</strong> using
        Maven/Gradle build tools, Selenium WebDriver/Rest Assured and
        implementing BDD tool Cucumber.
      </li>
      <li>
        Proficiency in coordinating with <strong>Product owners</strong> and
        <strong>BAs</strong> to write <strong>Cucumber scenarios</strong> in
        Gherkin and accordingly develop and maintain the
        <strong>Test Code</strong> and <strong>Page Object Model</strong>.
      </li>
      <li>
        Experience in web service testing using <strong>SOAP UI</strong> and
        <strong>REST Assured</strong>.
      </li>
      <li>
        Ability to work in fast-paced environment independently, as well as a
        part of the team and <strong>meet deadlines</strong>.
      </li>
      <li>
        Cross functional team member with interpersonal and customer relational
        skills.
      </li>
    </ul>
  </section>
  <section class="skils-section">
    <h3>Technical Skills</h3>
    <div class="grid-container">
      <div class="grid-item" v-for="item in ColHeaders" :key="item">
        {{ item }}
      </div>
      <div class="grid-item">
        <ul>
          <li v-for="item in TMTools" :key="item">{{ item }}</li>
        </ul>
      </div>
      <div class="grid-item">
        <ul>
          <li v-for="item in TestingTools" :key="item">{{ item }}</li>
        </ul>
      </div>
      <div class="grid-item">
        <ul>
          <li v-for="item in Languages" :key="item">{{ item }}</li>
        </ul>
      </div>
      <div class="grid-item">
        <ul>
          <li v-for="item in Databases" :key="item">{{ item }}</li>
        </ul>
      </div>
      <div class="grid-item">
        <ul>
          <li v-for="item in OS" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
  </section>
  <footer>
    <section class="footer-section">
      <br />
      <h5><cite>Quality is not an act, it is a habbit. -Aristotle</cite></h5>
    </section>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      ColHeaders: [
        "Test Management Tools",
        "Testing Tools",
        "Languages",
        "Databases",
        "OS",
      ],
      TMTools: ["HP ALM", "Jira", "Bugzilla"],
      TestingTools: [
        "Selenim WebDriver",
        "RestAssured",
        "Cucumber",
        "TestNG",
        "JUnit",
        "SoapUI",
      ],
      Languages: ["Java", "Groovy", "Python", "JavaScript"],
      Databases: ["Oracle", "PostgresSQL", "MongoDB", "Cassandra"],
      OS: ["Mac OS", "Linux", "Windows"],
    };
  },
};
</script>
<style>
.summary-section {
  background: #b6c4d8;
  margin-top: -1rem;
}
li {
  text-decoration: none;
  text-align: left;
}
.skils-section {
  background: #b0b8b9;
  margin-top: -3rem;
}

.skils-section h3 {
  margin: 3rem auto 1rem;
}
.grid-container {
  display: grid;
  column-gap: 1rem;
  text-align: center;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto;
  grid-auto-rows: 1fr;
  grid-auto-columns: 0.5fr;
}
.grid-item {
  padding: 0.05rem;
  text-align: center;
}
.grid-item li {
  padding: 0.05rem;
  text-align: center;
}
ul {
  list-style-type: none;
}
</style>
