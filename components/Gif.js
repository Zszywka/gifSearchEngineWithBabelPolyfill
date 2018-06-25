<<<<<<< HEAD
var GIPHY_LOADING_URL = '/loader.gif';
=======
var GIPHY_LOADING_URL = 'http://www.ifmo.ru/images/loader.gif';
>>>>>>> 4857a966cc90349ba07c467fc57d95738aa085fe

var styles = {
  minHeight: '310px',
  margin: '0.5em'
};

Gif = React.createClass({
  getUrl: function() {
    return this.props.sourceUrl || GIPHY_LOADING_URL;
  },
  render: function() {
<<<<<<< HEAD
    var url = this.props.loading ? GIPHY_LOADING_URL : this.props.url;
=======
    var url = this.props.loading ? GIPHY_LOADING_URL : this.props.url; 
>>>>>>> 4857a966cc90349ba07c467fc57d95738aa085fe
    return(
      <div style = {styles}>
        <a href = {this.getUrl()} title = 'view this on giphy' target = 'new'>
          <img id = 'gif' src = {url} style = {{width: '100%', maxWidth: '350px'}}/>
        </a>
      </div>
    );
  }
});
