import React from "react";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  handleClick = () => {
    this.setState({isOpen: true});
  };


  render() {
    const {isOpen} = this.state;
    return (
      <div>
        <button onClick={this.handleClick}>Open</button>
        {isOpen &&
          <div className="modal">
            <div className="modal-content">
              hello!
            </div>
          </div>
        }
      </div>
    );
  }
}
export default Modal;
