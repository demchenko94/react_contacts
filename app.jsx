var CONTACTS = [
    {
        id: 1,
        name: 'Li Shan',
        phoneNumber: '+250966666666',
        image: 'img/Li.jpg'
    }, {
        id: 2,
        name: 'Lisa Fun',
        phoneNumber: '+250966344466',
        image: 'img/Lisa.jpg'
    }, {
        id: 3,
        name: 'Nick Winer',
        phoneNumber: '+250976654433',
        image: 'img/Nick.jpg'
    }, {
        id: 4,
        name: 'Tony Starck',
        phoneNumber: '+250456784935',
        image: 'img/Tony.jpg'
    }
];

var Contact = React.createClass({
  render: function () {
    return <li className ="contact">
              <img className ="contact-image" src={this.props.image} width="60px" height="60px" />
              <div className ="contact-info">
                <div className ="contact-name">{this.props.name}</div>
                <div className ="contact-number">{this.props.phoneNumber}</div>
              </div>
            </li>;
  }
})
var ContactsList = React.createClass({
  getInitialState: function () {
    return {
      displayedContacts: CONTACTS
    };
  },
  handleSearch: function (event) {
    var searchQuery = event.target.value.toLowerCase();
    var displayedContacts = CONTACTS.filter(function (el) {
     var searchValue = el.name.toLowerCase();
      return searchValue.indexOf(searchQuery) !== -1;
    });
  this.setState({
    displayedContacts: displayedContacts
  });

  },
  render: function () {
    return (
      <div className ="contacts">
        <input type="text" className="search-field" onChange={this.handleSearch}/>
        <ul className ="contacts-list">{
              this.state.displayedContacts.map(function(el) {
                return <Contact key = {el.id}
                                name = {el.name}
                                phoneNumber = {el.phoneNumber}
                                image = {el.image}/>;
              })
            }
        </ul>
      </div>
    );
  }
});

ReactDOM.render(
  <ContactsList/>,
  document.getElementById("content")
);
