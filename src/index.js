import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Card from "./cards";
import sdata from "./data";


ReactDOM.render(
  <>
  <Card
  imgsrc={sdata[0].imgsrc}
  title={sdata[0].title}
  sname={sdata[0].sname}
  link={sdata[0].link}/>
  
  <Card
  imgsrc="https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzMDAxOTUyMV5BMl5BanBnXkFtZTgwNzAxMzYzOTE@._V1_.jpg"
  title="stranger things "
  sname="A netflix Orignal series"
  link="https://www.netflix.com/pk/title/80100172"/>
  </>
  ,
  document.getElementById('root')
);


