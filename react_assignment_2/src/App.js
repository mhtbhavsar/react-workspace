import React, {Component} from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component{

  state = {
    stringData : "",
    stringLength : 0
  }

  strdataHandler = (event) => {
    const strdataLength = event.target.value;
    this.setState({
      stringData : event.target.value, 
      stringLength : strdataLength.length
    })
  }

  
  deleteCharactersHandler = (charIndex) => {

    /** 
     * This state shold be update in immutable fasion
     * While updating it should not affect the current object / change current object.
     * To do that please refer the foloowign alternative ways
     * use copy of current object instead of reference of current object
     */

    // ---------Getting reference of this object / current object----------
    // const persons = this.state.persons;

    // ---------2 alternate ways To get the copy of current object instead of reference---------- 
    // const persons = this.state.persons.slice();
    const characters = this.state.stringData.split('');
    characters.splice(charIndex,1);
    const modifiedString = characters.join('');
    this.setState({stringData:modifiedString});
  }


  render(){

  let charArray = 0;
  charArray = this.state.stringData.split('')
  let characters = null;

  if(charArray.length > 0){
    characters = (<div>
        {
          charArray.map((character, index)=>{
            return <CharComponent 
            chardata={character} key={index} click={() => this.deleteCharactersHandler(index)}/>
          })
        }
      </div>
    )

    // persons = (<div>
    //   {this.state.persons.map((person, index) => {
    //     return <Person 
    //       click={() => this.deletePersonsHandler(index)}
    //       name={person.name} 
    //       age={person.age}
    //       key={person.id} 
    //       changed={(event) => this.nameChangeHandler(event, person.id)} />  
    //   })}
    // </div>)
  }


    return(
        <div className="App">
          Please enter the text here to count length : <br/>
        <input type="text" name="str_data" onChange={(event) => this.strdataHandler(event)}/><br/>
        String data entered : "{this.state.stringData}"
        <ValidationComponent count={this.state.stringLength} />
        {/* <CharComponent count={this.state.stringLength} /> */}
        {characters}
        </div>
    )
  }
}

export default App;
