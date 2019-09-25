import React, { Component } from "react";

class Team extends Component {
  constructor(props) {
    super(props);
  }

  getColor(status) {
    switch (status) {
      case "done":
        return "success";
        break;
      case "in_progress":
        return "warning";
        break;
      case "not_started":
        return "danger";
        break;
      default:
        return "light";
    }
  }

  render() {
    return (
      <div className="card mt-2">
        <div className="card-body">
          <h5 className="card-title">
            <strong> Team: </strong> {this.props.team.team_name}
          </h5>
          {/* <span className="text-muted">{ this.props.team.team_id }</span> */}
          <h6 className="card-subtitle mb-2 text-muted">

          </h6>
          <div className="row d-flex flex-sm-row flex-column fjustify-content-between m-2">
            { this.props.team.steps.map((item, i) => (
              <div
                key={i}
                className={`p-2 m-2 bg-light`}
              >
                <div> {item.step_name} </div>
                <div className={`badge b-0 badge-${this.getColor(item.status)}`}>{item.status.replace('_', ' ')}</div>
              </div>
            )) }
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
