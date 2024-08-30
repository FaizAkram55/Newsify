import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types' 

export class News extends Component {
static defaultProps={
  category:'general'
}

static propTypes={
  category:PropTypes.string
}
    constructor(props){  
    super(props);
    this.state={
    articles:[], 
    loading:false,
    TotalResults:0,
    page:1,
  }
  document.title=`${this.capitalized(this.props.category)} - Newsify`;
}

capitalized=(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

  async componentDidMount(){
    let url=`https://newsapi.org/v2/everything?q=${this.props.category}&from=2024-08-25&to=2024-08-25&sortBy=popularity&apiKey=3d0ab4c7ba9f4e63b380741c28d80569&page=1&pageSize=20`;
    this.setState({loading:true}) ;
    let data= await fetch(url);
    let parsedata=await data.json();
    this.setState({articles:parsedata.articles, loading:false, TotalResults:parsedata.totalResults})
  }
  handlePreviousPage = async()=>{
    let url=`https://newsapi.org/v2/everything?q=${this.props.category}&from=2024-08-25&to=2024-08-25&sortBy=popularity&apiKey=3d0ab4c7ba9f4e63b380741c28d80569&page=${this.state.page - 1}&pageSize=20`;
    this.setState({loading:true});
    let data= await fetch(url);
    let parsedata=await data.json();
    this.setState({
      page:this.state.page - 1,
      articles:parsedata.articles,
      loading:false 
    })
  }
  handleNextPage=async()=>{

    let url=`https://newsapi.org/v2/everything?q=${this.props.category}&from=2024-08-25&to=2024-08-25&sortBy=popularity&apiKey=3d0ab4c7ba9f4e63b380741c28d80569&page=${this.state.page + 1}&pageSize=20`;
    this.setState({loading:true});
    let data= await fetch(url);
    let parsedata=await data.json();
    this.setState({
      page:this.state.page + 1,
      articles:parsedata.articles, 
      loading:false 
 
    })
  }
  handleForPreviousScroll=()=>{
    this.handlePreviousPage();
    this.scrollWin();
  }
  scrollWin=()=>{ 
    window.scrollTo(0,100);
  }
  handleBoth=()=>{
    this.handleNextPage();
    this.scrollWin();
  }

  render() {
    return (
      <div className="container my-5">
        <h1>Newsify - Top {this.capitalized(this.props.category)} Headlines  </h1>
        <div className="text-center">
          {this.state.loading &&   <Spinner/>}
        </div>
        <div className="row my-3">
          { this.state.articles && this.state.articles.map((element,index) =>{
            return <div className="col-md-4" key={index}>
            <Newsitem title={!element.title?" ":element.title.slice(0,45)} description={!element.description?" ":element.description.slice(0,88)} imageUrl={element.urlToImage} newsUrl={element.url} publishedAt={element.publishedAt} author={element.author ? element.author : "Unknown"}/>
            </div>
          })}
       </div> 
       <div className="container d-flex justify-content-between">
       <button disabled={this.state.page<=1} type="button" onClick={this.handleForPreviousScroll} className="btn btn-dark">&larr;Previous</button>
       <button disabled={this.state.page + 1 > Math.ceil(this.state.TotalResults/20)} type="button" onClick={this.handleBoth} className="btn btn-dark">Next&rarr;</button>
       </div>
      </div>
    )
  }
}

export default News
