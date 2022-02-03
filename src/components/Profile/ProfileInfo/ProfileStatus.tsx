import React from "react";

export class ProfileStatus extends React.Component<any> {
  state = {
    editMode: false,
  };

  activateEditMode = () => {
      this.setState({
          editMode: true
      })
  }

  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input value={this.props.status} />
          </div>
        )}
      </div>
    );
  }
}
