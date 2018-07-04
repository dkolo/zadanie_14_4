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
            React.createElement('li', { key: this.props.movie.id }),
                React.createElement(MovieTitle, {MovieTitle: this.props.movie.title)},
                React.createElement(MovieDescription, {MovieDescription: this.props.movie.desc}),
                React.createElement('img', { src: this.props.movie.image })
            )
        )
    },
});