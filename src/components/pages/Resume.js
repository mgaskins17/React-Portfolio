import React from "react";
// import pdf from "../../Assets/resume.pdf"
// import { Document, Page } from "react-pdf";

export default function Resume() {
  return (
    <section>
      <div>
        <div>
          <h2>Front End Skillset</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Handlebars</li>
            <li>React</li>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>BootStrap</li>
            <li>Bulma</li>
          </ul>
        </div>

        <div>
          <h2>Back End Skillset</h2>
          <ul>
            <li>API's</li>
            <li>NodeJS</li>
            <li>Express</li>
            <li>MYSQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
        </div>

        <div>
          <h2>Extra's</h2>
          <ul>
            <li>Github/Git Operations</li>
            <li>Heroku</li>
          </ul>
        </div>
      </div>

      <div>
        <button>Download Resume!</button>
      </div>

    </section>
  )
}

