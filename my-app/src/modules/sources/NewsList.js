// list berita top headline dari indonesia
// https://newsapi.org/v2/top-headlines?country=id&apiKey=API_KEY
// bikin komponen kayak sourcelist tadi

import React from 'react';
import { Card, Icon, Image, Segment, Dimmer, Loader } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios';

const const_key = '78e066d544bf490ba548cfbd543080dc';
const sources = "https://newsapi.org/v2/top-headlines?country=id&apiKey="+ const_key ;
const dariSemantic = "https://react.semantic-ui.com";
const iconLocator = "https://icon-locator.herokuapp.com/icon?size=70..120..200";

class NewsList extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      data: [],
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    axios
      .get(sources)
      .then(result => {
        console.log(result, "ini sukses");
        this.setState({
          data:result.data.articles,
          loading:false
        });
      })

      .catch(error => {
        console.log(error.message, "ini error");
        this.setState({
          error:error.message,
          loading:false
        });
      });
  }

  render(){
    const{data, loading, error} = this.state;
    if(loading){
      return(
        <Segment>
        <Dimmer active>
          <Loader />
        </Dimmer>

        <Image src={`${dariSemantic}/images/wireframe/short-paragraph.png`} />
      </Segment>
    );
  }else if(error){
    return <Segment>{error}</Segment>;
  }

    return (
      <Card.Group>
        {data.map(articles => {
          return (
            <Card key={articles.id}>
            <Card.Content>
              <Image size="small" src={`${iconLocator}&url=${articles.url}`} />
                <Card.Header>{articles.title}</Card.Header>
                <Card.Meta>
                    <span className="date">{articles.publishedAt}</span>

                </Card.Meta>
                <Card.Description>{articles.description}</Card.Description>
                <br />
                <Card.Description>{articles.author}</Card.Description>
              </Card.Content>
            </Card>
          );
        })}
      </Card.Group>
);
  }
}

export default NewsList;
