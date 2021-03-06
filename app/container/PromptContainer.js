var React = require('react');
var transparentBg = require('../styles').transparentBg;
var Prompt = require('../components/Prompt');

var PromptContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    getInitialState: function () {
        return {
            username: ''
        }
    },
    handleSubmitUser: function (e) {
        e.preventDefault();
        var user = this.state.username;
        this.setState({
            username: ''
        });
        if (this.props.routeParams.PlayerOne) {
            // battle
            this.context.router.push({
                pathname: '/battle/',
                query: {
                    PlayerOne : this.props.routeParams.PlayerOne,
                    PlayerTwo : this.state.username
                }
                
            })

        }
        else {
            this.context.router.push("/PlayerTwo/" + this.state.username)
        }

    },

    handleUpdateUser: function (event) {
        this.setState({
            username: event.target.value
        })
    },

    render : function(){
        return(
            <Prompt 
        onSubmitUser = {this.handleSubmitUser}
        onUpdateUser = {this.handleUpdateUser}
        header = {this.props.route.header}
        username = {this.state.username}/>
        )
    }
});

module.exports = PromptContainer;
