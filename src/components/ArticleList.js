import React, { Component, PropTypes } from 'react'
import Article from './Article'

class AricleList extends Component {
    state = {
        selectedArticles: [],
        openedArticles: []
    };

    render() {
        return (
            <div>
                <ul>
                    {this.getList()}
                </ul>
            </div>
        )
    }

    getList() {
        return this.props.articles.map((article, index) =>
            <li key={article.id}>
                <Article
                    article = {article}
                    isSelected = {this.state.selectedArticles.includes(article.id)}
                    openedArticles = {this.state.openedArticles}   
                    isOpened = {this.state.openedArticles.includes(article.id)}
                    
                    selectArticle = {this.selectArticle}
                    showArticle = {this.showArticle}
                />
            </li>
        )
    }

    selectArticle = (id) => {
        this.setState({
            selectedArticles: this.state.selectedArticles.concat(id)            
        });
    };

    showArticle = (id) => {
        this.setState({
            openedArticles: this.state.openedArticles.concat(id)
            //openedArticles: ["56c782f1a2c2c3268ddb3206", "56c782f197fe2bad471b3740"]
        });       
    }; 
}

export default AricleList