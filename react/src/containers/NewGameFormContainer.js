import React, { Component } from 'react';
import TitleField from '../components/TitleField';
import GameTypeField from '../components/GameTypeField';
import TimeField from '../components/TimeField';
import DateField from '../components/DateField';
import AddressField from '../components/AddressField';
import CityField from '../components/CityField';
import ZipField from '../components/ZipField';
import NumberOfPlayersField from '../components/NumberOfPlayersField';

class NewGameFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      gameType: '',
      time: '',
      date: '',
      address: '',
      city: '',
      zip: '',
      number_of_players: 2,
    }
  this.handleFormSubmit=this.handleFormSubmit.bind(this);
  this.handleFormClear=this.handleFormClear.bind(this);
  this.handleTitleChange=this.handleTitleChange.bind(this);
  this.handleGameTypeChange=this.handleGameTypeChange.bind(this);
  this.handleTimeChange=this.handleTimeChange.bind(this);
  this.handleDateChange=this.handleDateChange.bind(this);
  this.handleAddressChange=this.handleAddressChange.bind(this);
  this.handleCityChange=this.handleCityChange.bind(this);
  this.handleZipChange=this.handleZipChange.bind(this);
  this.handleNumberOfPlayersChange=this.handleNumberOfPlayersChange.bind(this);
}

handleFormSubmit(event) {
  event.preventDefault()
  let formPayLoad = {
    title: this.state.title,
    gameType: this.state.gametype,
    time: this.state.time,
    date: this.state.date,
    address: this.state.address,
    city: this.state.city,
    zip: this.state.zip,
    number_of_players: this.state.number_of_players,
  }
  this.addNewGame(formPayLoad);
  this.handleFormClear(event);
}

handleFormClear(event) {
  event.preventDefault();
  this.setState({
    title: '',
    gameType: '',
    time: '',
    date: '',
    address: '',
    city: '',
    zip: '',
    number_of_players: 2,
  })
}

addNewGame(formPayload) {
fetch('/api/v1/games', {
  method: 'POST',
  body: JSON.stringify(formPayload)
})
.then(response => response.json())
.then(responseData => {
  this.setState({ games: [...this.state.games, responseData] })
})
}

handleTitleChange(event) {
  event.preventDefault();
  this.setState({ title: event.target.value })
}

handleGameTypeChange(event) {
  event.preventDefault();
  this.setState({ gameType: event.target.value })
}

handleTimeChange(event) {
  event.preventDefault();
  this.setState({ time: event.target.value })
}

handleDateChange(event) {
  event.preventDefault();
  this.setState({ date: event.target.value })
}

handleAddressChange(event) {
  event.preventDefault();
  this.setState({ address: event.target.value })
}

handleCityChange(event) {
  event.preventDefault();
  this.setState({ city: event.target.value })
}

handleZipChange(event) {
  event.preventDefault();
  this.setState({ zip: event.target.value })
}

handleNumberOfPlayersChange(event) {
  event.preventDefault();
  this.setState({ number_of_players: event.target.value })
}

  render() {
    return(
      <form className="new-game-form callout">
        <TitleField
          content={this.state.title}
          label="Game Title"
          name="title"
          handlerFunction={this.handleTitleChange}
        />
        <GameTypeField
          content={this.state.gametype}
          label="Game Type"
          name="gametype"
          handlerFunction={this.handleGameTypeChange}
        />
        <TimeField
          content={this.state.time}
          label="Time"
          name="time"
          handlerFunction={this.handleTimeChange}
        />
        <DateField
          content={this.state.date}
          label="Date"
          name="date"
          handlerFunction={this.handleDateChange}
        />
        <AddressField
          content={this.state.address}
          label="Address"
          name="address"
          handlerFunction={this.handleAddressChange}
        />
        <CityField
          content={this.state.city}
          label="City"
          name="city"
          handlerFunction={this.handleCityChange}
        />
        <ZipField
          content={this.state.zip}
          label="Zip"
          name="zip"
          handlerFunction={this.handleZipChange}
        />
        <NumberOfPlayersField
          content={this.state.number_of_players}
          label="Number Of Players"
          name="number_of_players"
          handlerFunction={this.handleNumberOfPlayersChange}
        />

        <div className="button-group">
          <input className="button" type="submit" value="Clear" onClick={this.handleFormClear}/>
          <input className="button" type="submit" value="Submit" onClick={this.handleFormSubmit}/>
        </div>
      </form>
    )
  }
}

export default NewGameFormContainer;
