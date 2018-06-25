// here everything is bound together

var GIPHY_API_URL = 'https://api.giphy.com';
// wygenerowany ze strony
var GIPHY_PUB_KEY = 'q4k1xiFfyXHFEVGeG4SYB8VJsIA5OtQu';

App = React.createClass({

// initial values of the state
  getInitialState(){
    return {
      loading: false,
      // key with component Search.js
      searchingText: '',  //? pobiera searchingText tez ze stau z Search.js?, tak dziecko przekazuje wiadomosc?
      gif: {}
    };
  },

  // download the entered text(serachingText) at the input
  handleSearch: function(searchingText) {
    this.setState({
      // zasygnalizuj ze zaczol sie proces ladowania
      loading: true
    });
    // rozpocznij pobieranie gifa
    this.getGif(searchingText, function(gif) {
      // na zakonczenie pobierania
      this.setState({
        // przestan sygnalizowac ladowanie
        loading: false,
        // ustaw nowego gifa z wyniku pobierania
        gif: gif,
        // ustaw nowy stan dla wyszukiwanego tekstu //co to znaczy?
        searchingText: searchingText
      });
      // this.getGif()-> wskazuje na cos innego niz komponent App,
      // metoda bind obejdzie to i zachowa kontekst, wskaze na gifa
    }.bind(this));  //ten this jest this app.js ? wstrzyknij funkcje cos tam to znaczy bin
  },

  // na wejscie przyjmujemy parametr: tekst wpisany
  // i funkcja ktora ma sie wykonac po pobraniu gifa
  getGif: function(searchingText, callback) {
    // kontruujemy adres URL dla API Giphy

    var url = GIPHY_API_URL + '/v1/gifs/random?api_key=' + GIPHY_PUB_KEY + '&tag=' + searchingText;
    // wywolujemy cala sekwencje tworzenia zapytania do XHR do serwera i wysylamy je
    var xhr = new XMLHttpRequest();
    // wysyla zadanie get na adres url(wysylamy zadanie)
    xhr.open('GET', url);
    xhr.onload = function() {
      if (xhr.status === 200) {
        // w obiekcie odpowiedzi mamy obiekt z danymi, rozpakkowujemy je do zmiennej data
        // przerob tekst na obiekt
        var data = JSON.parse(xhr.responseText).data;
        // ukladamy obiekt gif na podstawie tego co przyslala serwer
        var gif = {
          // sam gif
          url: data.fixed_width_downsampled_url,
          // link do obrazka
          sourceUrl: data.url
        };
        // ten obiekt przekazujemy do funkcji callback, a callback to 2 parametr getGif
        //
        callback(gif);
      }
    };
    xhr.send();
  },

  render: function() {

    var styles = {
      margin: '0 auto',
      textAlign: 'center',
      width: '90%'
    };

    return (
      <div>
        <h1> Wyszukiwarka GIF </h1>
        <p>Znajdz gifa na <a href='http://giphy.com'>giphy</a>. Naciskaj enter, aby pobrac kolejne gify</p>
        // onSearch --> wywoalanie funckji z komponentu wyszego(od dziecka do rodzica)
        <Search  onSearch = {this.handleSearch}/> //bierze tekst ze stanem powyzej?
        <Gif
        // information about gif
          // loading --> gif is loading
          loading = {this.state.loading} //ze stanu App bierze?
          // direct url -> img src={url}../>
          url = {this.state.gif.url}   //? z gifa bierze?
          // address to the page with a gif -> <a href={scrUrl}>..</a>
          sourceUrl = {this.state.gif.sourceUrl}  //jak wchodzisz w obiekt? i skad bierze sourceUrl?
        />
      </div>
    );
  }
});
