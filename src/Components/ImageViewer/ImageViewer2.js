import React from 'react';
import { ImgWrapper, SmallImgHolder, SmImg, LargeImg} from './ImageViewerStyles2';

class ImageViewer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeImg: '1'
    };
    this.changeActiveImage = this.changeActiveImage.bind(this);
  };
  changeActiveImage(e) {
    this.setState({
      activeImg: e.currentTarget.dataset.id
    });
  };
  selector() {
    const { activeImg } = this.state

    switch (activeImg) {
      case '1':
        return <LargeImg image={this.props.cover} maxWidth={500} withWebp={true} fit="clip" blurryPlaceholder={false}/>
      case '2':
        return <LargeImg image={this.props.img1} maxWidth={500} withWebp={true} fit="clip" blurryPlaceholder={false}/>
      case '3':
        return <LargeImg image={this.props.img2} maxWidth={500} withWebp={true} fit="clip" blurryPlaceholder={false}/>
        
      default:
        break;
    }
  };
  render() {
    return (
      <ImgWrapper>
        <div className="MainImgHolder">{this.selector()}</div>
        <SmallImgHolder className="SmallImgHolder">
          <div onMouseOver={this.changeActiveImage} data-id="1">
            <SmImg className="SmallPic" image={this.props.cover} maxWidth={165} withWebp={true} fit="clip" />
          </div>
        <div onMouseOver={this.changeActiveImage} data-id="2">
        <SmImg className="SmallPic" image={this.props.img1} maxWidth={165} withWebp={true} fit="clip" />
        </div>
        <div onMouseOver={this.changeActiveImage} data-id="3">
        <SmImg className="SmallPic" image={this.props.img2} maxWidth={165} withWebp={true} fit="clip"/>
        </div>
        
        </SmallImgHolder>
      </ImgWrapper>
    )
  }
};

export default ImageViewer;