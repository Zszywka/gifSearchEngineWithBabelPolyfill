// zajmie się wyświetleniem gifa albo loadera
// (kiedy nawiązywane jest połączenie z serwerem)

// gif loading
var GIPHY_LOADING_URL = 'http://www.ifmo.ru/images/loader.gif';

// dlaczego zmienna jest na zewnatrz Gif a nie w srodku?lepiej w srodku bo sie nie gryzie
var styles = {
  minHeight: '310px',
  margin: '0.5em'
};

Gif = React.createClass({
  getUrl: function() {
    // returns the address of the page with the searched gif or gif loading
    return this.props.sourceUrl || GIPHY_LOADING_URL;  //skad w kodzie wiadfomo ze sourceUrl jest w App.js?
  },
  render: function() {
    // if false-> this.props.loading if truth-> GIPHY_LOADING_URL
    // (App.js pobiera gifa i gpobranego przekazuje go tu -->this.props.url)
    // jesli this.props.loading ma wartosc true--> wtedy url = this.props.url
    // jesli this.props.loading ma wartosc false --> wtedy url = GIPHY_LOADING_URL
    var url = this.props.loading ? GIPHY_LOADING_URL : this.props.url; //?? gdzie jest okreslone this.props.loading?
    return(
      <div style = {styles}>
      // this.getUrl -> zwraca adres strony obrazka/sygnalizuje ladowanie gdy nie znajdzie obrazka
        <a href = {this.getUrl()} title = 'view this on giphy' target = 'new'>
          <img id = 'gif' src = {url} style = {{width: '100%', maxWidth: '350px'}}/>
        </a>
      </div>
    );
  }
});
