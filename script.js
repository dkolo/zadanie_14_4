/* Pierwsza część submodułu 14.4

var GalleryItem = React.createClass({
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
        movies: React.PropTypes.object.isRequired,
    },
    render: function() {
        return (
            React.createElement('li', {},
                React.createElement(MovieTitle, { title: this.props.movies.title }),
                React.createElement(MovieDescription, { desc: this.props.movies.desc }),
                React.createElement('img', { src: this.props.movies.image })
            )
        )
    }
});

var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },
    render: function() {
        return (
            React.createElement('h2', {}, this.props.title)
        )
    }
});

var MovieDescription = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired,
    },
    render: function() {
        return (
            React.createElement('p', {}, this.props.desc)
        )
    }
});

var MovieList = React.createClass({
    propTypes: {
        movies: React.PropTypes.array.isRequired,
    },
    render: function() {
        var moviesElements = movies.map(function(movie) {
            return (React.createElement(Movie, { key: movie.id, movies: movie }))
        })
        return (
            React.createElement('ul', {}, moviesElements)
        );
    }
});

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement(MovieList, {})
    );

ReactDOM.render(element, document.getElementById('app'));