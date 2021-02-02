import React, { Component } from "react";
import { ReactPhotoCollage } from "react-photo-collage"
import selfpic from "../../website photos/selfie.jpg"
import image1 from "../../website photos/art-folder/arcade-girl1.png"
import image2 from "../../website photos/art-folder/bloodbourne.png"
import image3 from "../../website photos/art-folder/Chaeyoung.png"
import image4 from "../../website photos/art-folder/DnD-idea-knight.png"
import image5 from "../../website photos/art-folder/Kagu-artstyle.png"
import image6 from "../../website photos/art-folder/ditys-sailor-uni.png"
import image7 from "../../website photos/art-folder/DnD-idea-warlock.png"
import "./About.css"

const setting = {
  width: '100%',
  height: ['150px', '170px'],
  layout: [3, 4],
  photos: [
    { src: image1 },
    { src: image2 },
    { src: image3 },
    { src: image4 },
    { src: image5 },
    { src: image6 },
    { src: image7 },
  
  ],
  showNumOfRemainingPhotos: false
}
class About extends Component {
  render() {
    return (
      <div className="about-me-container">
        <ReactPhotoCollage {...setting}/>
        <div className="about-me-contents">
          <div className="about-me-description">
            <div classname="self-pic-container">
              <img src={selfpic}
                style={{ width: 80, height: 80, borderRadius: 80 / 2 }} />
            </div>
            <h1>ABOUT ME<br></br><br></br></h1>
            <p>
              Howdy!<br></br><br></br>
              
              My name is Xien Thomas Welcome to my webpage!<br></br><br></br>

              I graduated from Texas Southern University of spring 2016 and
              recently graduated from Texas A M Unviversity of August 2020 with
              a Master's degree. Ever since I can remember, I loved to draw and 
              paint. I considered everything I do is a form of Art even programming.
              It is main reason I started programming, I noticed that I can play
              with information given to me and create some type of output.<br></br><br></br> 

              Currently I am working on personal project both Digital Art and Programming!
              Check more in my project channel.
            </p>
          </div>
        </div>
      </div>
            )
  }
}

export default About;
