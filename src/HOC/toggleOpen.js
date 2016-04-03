import React, { Component as ReactComponent } from 'react'

export default (Component) => class ToggleOpen extends ReactComponent {

    state = {
        isOpen: false,        
        isOpenArticle: false
    };
    
    toggleOpen = (ev) => {
        if (ev) ev.preventDefault();

        this.setState({
            isOpen: !this.state.isOpen
        })
    };  
    
    toggleArticles = (articles) => {
        this.setState({
//            isOpen: true
        })
    };

    render() {
        return <Component {...this.props} isOpen = {this.state.isOpen} isOpenArticle = {this.state.isOpenArticle} toggleOpen = {this.toggleOpen} toggleArticles = {this.toggleArticles} />
    }
}