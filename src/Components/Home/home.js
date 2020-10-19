import React, { Component } from "react";
import { Tab } from "semantic-ui-react";
import { Label, Menu } from "semantic-ui-react";
import "./home.css";

import { Loader, Segment, Button, Dropdown } from "semantic-ui-react";
var parse = require("html-react-parser");
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [
        {
          key: "Untitled",
          text: "Untitled",
          value: "Untitled",
          image: (
            <Label className="Derek" as="a" circular>
              U
            </Label>
          ),
        },
      ],
    };
    this.myRef = React.createRef();
  }
  componentDidMount() {
    this.loadRectangle();
  }
  loadRectangle = () => {
    var files = this.state.files;
    let filenameArray = Object.keys(localStorage);
    for (var i = 0; i < filenameArray.length; i++) {
      console.log(filenameArray);
      let savedHtml = {
        key: filenameArray[i],
        text: filenameArray[i],
        value: filenameArray[i],
        image: (
          <Label className="Derek" as="a" circular>
            {filenameArray[i].charAt(0).toUpperCase()}
          </Label>
        ),
      };
      if (!this.state.files.includes(savedHtml)) {
        files.push(savedHtml);
      }
    }
    console.log(files);
    this.setState({ files: files }, this.initDrawing);
  };
  initDrawing = () => {
    console.log(this.myRef, this.state);
    this.initDraw(this.myRef.current);
  };

  saveArt = () => {
    var fileName = prompt("Please enter your File Name to Save", "Untitled");
    if (fileName != null) {
      localStorage.setItem(fileName, this.myRef.current.innerHTML);
      var files = this.state.files;
      let savedHtml = {
        key: fileName,
        text: fileName,
        value: fileName,
        image: (
          <Label className="Derek" as="a" circular>
            {fileName.charAt(0).toUpperCase()}
          </Label>
        ),
      };
      files.push(savedHtml);
      console.log(files);
      this.setState({ files: files }, this.initDrawing);
    }
  };

  setMousePosition = (e, mouse) => {
    var ev = e || window.event; //Moz || IE
    if (ev.pageX) {
      //Moz
      mouse.x = ev.pageX + window.pageXOffset;
      mouse.y = ev.pageY + window.pageYOffset;
    } else if (ev.clientX) {
      //IE
      mouse.x = ev.clientX + document.body.scrollLeft;
      mouse.y = ev.clientY + document.body.scrollTop;
    }
  };

  initDraw = (canvas) => {
    var mouse = {
      x: 0,
      y: 0,
      startX: 0,
      startY: 0,
    };
    var element = null;
    var self = this;
    canvas.onmousemove = function (e) {
      self.setMousePosition(e, mouse);
      if (element !== null) {
        element.style.width = Math.abs(mouse.x - mouse.startX) + "px";
        element.style.height = Math.abs(mouse.y - mouse.startY) + "px";
        element.style.left =
          mouse.x - mouse.startX < 0 ? mouse.x + "px" : mouse.startX + "px";
        element.style.top =
          mouse.y - mouse.startY < 0 ? mouse.y + "px" : mouse.startY + "px";
      }
    };

    canvas.onclick = function (e) {
      if (element !== null) {
        element = null;
        canvas.style.cursor = "default";
        console.log("finsihed.");
      } else {
        console.log("begun.");
        mouse.startX = mouse.x;
        mouse.startY = mouse.y;
        element = document.createElement("div");
        element.className = "rectangle";
        element.style.left = mouse.x + "px";
        element.style.top = mouse.y + "px";
        canvas.appendChild(element);
        canvas.style.cursor = "crosshair";
      }
    };
  };

  loadFile = (e, { value }) => {
    //this.setState({ value })
    console.log(value);
    let html = localStorage.getItem(value);
    this.loadDraw(this.myRef.current, html);
  };
  loadDraw = (canvas, html) => {
    let htmlEncode = parse(html);
    canvas.innerHTML = "";
    canvas.insertAdjacentHTML("beforeend", html);
    canvas.style.cursor = "crosshair";
  };

  render() {
    return (
      <div>
        <div className="leftAlign">
          <Label className=" labelTag"> Load Saved</Label>
          <Dropdown
            onChange={this.loadFile}
            inline
            className="assignDrops"
            options={this.state.files}
            defaultValue={this.state.files[0].value}
          />
        </div>

        <div className="rightAlign">
          <Button onClick={this.saveArt}>Save</Button>
          <div>
            <div>
              <div id="canvas" ref={this.myRef}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
