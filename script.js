/*var GalleryItem = React.createClass({
    propTypes: {
        image: React.PropTypes.object.isRequired,
    },
    render: function() {
        return (
            React.createElement('div', {},
                React.createElement('h2', {}, this.props.image.name),
                React.createElement('img', { src: this.props.image.src })
            )
        )
    },
});

var image = {
    name: 'Kotek',
    src: 'http://imgur.com/n8OYCzR.png'
};

var element = React.createElement(GalleryItem, { image: image });
ReactDOM.render(element, document.getElementById('app'));
*/
var movies = [{
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        image: './images/harry.jpg'
    },
    {
        id: 2,
        title: 'Król lew',
        desc: 'Film o królu sawanny',
        image: './images/lion.jpg'
    },
    {
        id: 3,
        title: 'Władca pierścieni',
        desc: 'Film fantasy o zmaganiach dobra ze złem w świecie stworzonym przez J.R.R. Tolkiena',
        image: './images/gandalf.jpg'
    },
    {
        id: 4,
        title: 'Przyjaciele',
        desc: 'Serial komediowy opisujący życie szóstki przyjaciół żyjących w Nowym Jorku',
        image: './images/friends.jpg'
    }
];

var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },
    render: function() {
        return (
            React.createElement('li', {}),
            React.createElement(movieTitle, { MovieTitle: this.props.movie.title }),
            React.createElement(movieDescription, { MovieDescription: this.props.movie.desc }),
            React.createElement('img', { src: this.props.movie.image })
        )
    },
});

var MovieTitle = React.createClass({
    propTypes: {
        movieTitle: React.PropTypes.string.isRequired,
    },
    render: function() {
        return (
            React.createElement('h2', {}, this.props.movieTitle)
        )
    }
});

var MovieDescription = React.createClass({
    propTypes: {
        movieDescription: React.PropTypes.string.isRequired,
    },
    render: function() {
        return (
            React.createClass('p', {}, this.props.movieDescription)
        )
    }
});

var MovieList = React.createClass({
    propTypes: {
        movieList: React.PropTypes.array.isRequired,
    },
    render: function() {
        var moviesElements = movies.map(function(movie) {
            return React.createElement(Movie, { key: movie.id, movieList: movie }),
        })
        return (
            React.createElement('ul', {}, moviesElements)
        )
    }
});

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, MovieList)
    );

ReactDOM.render(element, document.getElementById('app'));