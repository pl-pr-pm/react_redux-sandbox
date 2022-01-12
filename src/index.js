import React from "react";
import { render } from "react-dom";
import axios from "axios";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { giphyList: [], inputText: "" };
  }

  // componentDidMount() {
  //   //ライフサイクルメソッド： Appコンポーネントがレンダーされたタイミングで実行
  //   this.giphyApi();
  // }

  renderImageList(list) {
    const imageList = list.map((url) => {
      return (
        <li className="item">
          <img className="image" src={url} />
        </li>
      );
    });

    return <ul className="list">{imageList}</ul>;
  }

  onChange = (e) => {
    this.setState({ inputText: e.target.value });
  };

  onClick = () => {
    this.giphyApi(this.state.inputText);
    this.setState({ inputText: "" });
  };

  render() {
    return (
      <>
        <input type="text" value={this.inputText} onChange={this.onChange} />
        <button onClick={this.onClick}>SEARCH</button>
        {this.renderImageList(this.state.giphyList)}
      </>
    );
  }
  giphyApi = (searchText) => {
    const search = searchText;
    const key = "V6AU97qCSCYVmbIC5UDppEiVM1xnuO9E";
    const limit = 3;

    const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}&limit=${limit}`;
    axios.get(url).then((res) => {
      const data = res.data.data;
      const imageUrl = data.map((item) => item.images.downsized.url);
      this.setState({ giphyList: imageUrl });
    });
  };
}

render(<App />, document.getElementById("root"));
