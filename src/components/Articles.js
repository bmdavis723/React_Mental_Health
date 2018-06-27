import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class Articles extends React.Component {
  constructor(props) {
    super(props);
    console.log("I'm created")
    this.state = {
      articles: []
  }
}

  componentDidMount() {
    const url = 'https://newsapi.org/v2/everything?q=fitness+exercise+wellness&from=2018-06-26&to=2018-06-26&sortBy=popularity&apiKey=ec7874794e95486fa3b38a9d6ca70a54'
    console.log("I mounted")
    axios.get(url).then(res => {
      let response = this.dataHandler(res);
      this.setState({articles: response})
    });
  }

  dataHandler(response) {
    let attrs = ['title','urlToImage','url', 'description'];
    let articles;
    articles = response.data.articles.map( article => attrs.map( attr => article[attr]) );
      // articles = response.data.articles.map( article => [article.title, article.urlToImage]);
    return articles
  }
  // Want to use async/await? Add the `async` keyword to your outer function/method.//
  render(){
      return (
        <div>
            {this.state.articles.map((article, i) =>
              <a key={i} href="{article[2]}">{article[0]}<img src={article[1]} alt="img" />{article[3]}</a>)}
        </div>
      )
    }
}
