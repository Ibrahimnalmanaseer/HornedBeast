import Horned from "./hornedbeast";
import React from "react";
import myJson from './data.json';


class Main extends React.Component{

       
    render(){
               

      return  <div id='hornesCard'>  {myJson.map((value, i) => 
      <Horned name={myJson[i]['title']} myJson={myJson[i]['description']} imgUrl={myJson[i]['image_url']} />)}
      </div>

}
}

export default Main;

