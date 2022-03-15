import { LightningElement } from "lwc";

export default class App extends LightningElement {
  title = "Find a FED";
  showFeds = false;
  matchingFeds = 0;
  queryTerm;

  /**
   * Getter for the features property
   * Whats a getter? Its a special function that can be called to return a value
   * Below is an arrar of objects
   * Each item in the obeject has a list of keys value pairs
   * This means that we use the key "acid, label, icon, introduction etc to search to the mathing value"
   */
  get feds() {
    const allFeds = [
      {
        acid: "karan@accenture.com",
        label: "Karan",
        icon: "https://i.ibb.co/qBVNYy5/karan.jpg",
        introduction: "Going steadily at Australian Defence Force, styling some AEM adaptive forms, building some prototype UI in AEM with React-Bootstrap, learning how to write unit testing with Jest and providing UI support in Pega",
        skills: ['scrum', 'agile'],
      },
      {
        acid: "ray@accenture.com",
        label: "Ray",
        icon: "https://i.ibb.co/1RZvqK5/emoji-2.png",
        introduction: "Going steadily at Australian Defence Force, styling some AEM adaptive forms, building some prototype UI in AEM with React-Bootstrap, learning how to write unit testing with Jest and providing UI support in Pega",
        skills: ['angular'],
      },
      {
        acid: "shoel@accenture.com",
        label: "Shoel",
        icon: "https://i.ibb.co/q5hpFZD/emoji-4.png",
        introduction: "Going steadily at Australian Defence Force, styling some AEM adaptive forms, building some prototype UI in AEM with React-Bootstrap, learning how to write unit testing with Jest and providing UI support in Pega",
        skills: ['jquery'],
      },
      {
        acid: "jessica@accenture.com",
        label: "Jessica",
        icon: "https://i.ibb.co/8KTQ4LL/jessica.jpg",
        introduction: "Going steadily at Australian Defence Force, styling some AEM adaptive forms, building some prototype UI in AEM with React-Bootstrap, learning how to write unit testing with Jest and providing UI support in Pega",
        skills: ['react', 'css', 'aem'],
      },
      {
        acid: "liam@accenture.com",
        label: "Liam",
        icon: "https://i.ibb.co/VB7xRYT/liam.png",
        introduction: "Going steadily at Australian Defence Force, styling some AEM adaptive forms, building some prototype UI in AEM with React-Bootstrap, learning how to write unit testing with Jest and providing UI support in Pega",
        skills: ['react', 'css', 'aem'],
      },
      {
        acid: "erin@accenture.com",
        label: "Erin",
        icon: "https://i.ibb.co/WDXrz16/emoji-1.png",
        introduction: "Going steadily at Australian Defence Force, styling some AEM adaptive forms, building some prototype UI in AEM with React-Bootstrap, learning how to write unit testing with Jest and providing UI support in Pega",
        skills: ['react', 'css', 'aem', 'angular'],
      },
    ];

    //here we have a return. A return is a keyword that simply returns the value of the statement after it.
    //This return may look a little complicated as its using something called a ternary statement
    //Again a ternay statment is nothing more than a compact 'if else' statement.
    //It simply states if this do that else do this
    //In the case below it is saying if there is a 'queryTerm' value then (?) return the items that match otherwise return the whole lot

    return this.queryTerm ? allFeds.filter(item => item.skills.includes(this.queryTerm)) : allFeds;
  }

  showSearch(){
    this.showFeds = true;
  }

  hideSearch(){
    this.showFeds = false;
  }

  handleKeyUp(evt) {
    //the following is saying that the query term is equal to the current events value
    this.queryTerm = evt.target.value;
  }
}
