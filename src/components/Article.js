import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'
import { findDOMNode } from 'react-dom'
import toggleOpen from '../HOC/toggleOpen'

class Article extends Component {

    render() {
        const { article: { title, id }, isSelected, openedArticles} = this.props;
        const style = isSelected ? {color: 'red'} : null;

         if (openedArticles.length > 1) {
             openedArticles.splice(0, 1);
         }

        return (
            <div ref = "articleContainer">
                <h3 onClick = {this.handleClick} style = {style}>{title}</h3>
                <a href = "#" onClick = {this.handleSelect}>select this article</a>

                {openedArticles.includes((id)) ? this.getBody() : null}


            </div>
        )
    }

    handleSelect = (ev) => {
        const { article: {id}, selectArticle } = this.props;
        selectArticle(id)
    };

    getBody(openedArticles) {
        const {article} = this.props;

        // if (!this.props.isOpen) {
        //     return null;
        // }
      //  console.log(openedArticles)

        return (
            <section>
                {article.text}
                <CommentList comments = {article.comments} ref = "commentList" />
            </section>
        )
    }

    handleClick = (ev) => {
        const { article: {id}, showArticle, openedArticles} = this.props;
        showArticle(id);

        // console.log(openedArticles)
        // console.log(id)



        this.props.toggleOpen();
    }
}

export default toggleOpen(Article)