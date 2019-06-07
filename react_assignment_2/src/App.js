import React, {Component} from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component{

  state = {
    stringData : ""
  }

  strdataHandler = (event) => {
    this.setState({
      stringData : event.target.value
    })
  }

  
  deleteCharactersHandler = (charIndex) => {
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
        <input type="text" name="str_data" onChange={(event) => this.strdataHandler(event)} value={this.state.stringData}/><br/>
        String data entered : "{this.state.stringData}"
        <ValidationComponent count={this.state.stringData.length} />
        {/* <CharComponent count={this.state.stringLength} /> */}
        {characters}
        </div>
    )
  }
}

export default App;
