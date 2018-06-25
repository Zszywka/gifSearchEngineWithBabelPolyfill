// search bar
// it starts searching:
// 1. when you press enter
// 2. or when the length of the text you enter will be greater than 2 letters

Search = React.createClass({
  // ----------------------------SET INITIAL STATE -----------------------------
  getInitialState() {
    return {
      searchingText: ''
    };
  },

  // --------------------------HANDLECAHNGE METHOD------------------------------
// kazda zmiana generuje zdarzenie
  handleChange: function(event) {    //? o co chodzi z ta funkacj
    // wchodzimy do wartosci zdarzenia poprzez target.value
    // target to jest info ktory zostal ruszony (gdzieto jhest w html)
    var searchingText1 = event.target.value;  //??
    // zaktualizowanie stanu komponentu
    // klucz i wartosc
    this.setState({
      searchingText: searchingText1
    });
    // the question is sent if it has more than 2 characters
    if (searchingText.length > 2) {
      // searchingText -> our text in searching
      // odpalanie tej funkcji z app z parametrem tekstem
      this.props.onSearch(searchingText);
    }
  },
  // recognizes that the pressed key is enter and sends a message to the parent
  //so that this one again starts the function that sends the query after the gifa
  handleKeyUp: function(event) {
    // 13 it is code button ENTER
    // if you press the key ENTER
    if (event.keyCode === 13) {
      this.props.onSearch(this.state.searchingText);  //co robi ta funkcja //dlaczego this.state.a nie sam searchingText
    }//gdzie tu jest ze wysyla wiadomosc do rodzica?a on jeszcze raz uruchomi funkcje wysylajac pytanie o gifa
  },

  // --------------------------------RENDER-------------------------------------
  render: function() {

    var styles = {
      fontSize: '1.5em',
      width: '90%',
      maxWidth: '350px'
    };

    return < input
      type = 'text'
      // kiedy cos sie wklei w pasek wyszukiwarki nasluch
      onChange = {this.handleChange}
      // listening for pressing the enter key(nasluch na eneter)
      // kiedy kliknie sie cos na klawiaturze nasluch
      onKeyUp = {this.handleKeyUp}
      placeholder = 'Enter the search phrase here'
      style = {styles}
      value = {this.state.searchingText}
    />

  }
});
