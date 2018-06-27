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
    const url = 'https://newsapi.org/v2/everything?q=fitness&from=2018-06-26&to=2018-06-26&sortBy=popularity&apiKey=ec7874794e95486fa3b38a9d6ca70a54'
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
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              { this.state.articles.map((article, i) => {
                  return (
                    <div key={i} className={(i === 0) ? "carousel-item active" : "carousel-item" }>
                      <img className="d-block w-100 h-50" src={article[1]} alt="img" />
                      <div className="carousel-caption">
                        <h5><a key={i} href={article[2]}>{article[0]}</a></h5>
                        <p>{article[3]}</p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            <a class="carousel-control-prev" href="#carouselExampleSlidesOnly" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleSlidesOnly" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      )
    }
}
