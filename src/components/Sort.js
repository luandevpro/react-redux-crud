import React, { Component } from "react";

class Sort extends Component {
  constructor(props){
    super(props);
    this.state = {
      sort : {
        by: '',
        value: ''
      }
    }
  }
  onClick = (sortBy,sortValue) => {
    this.setState({
      sort: {
        by: sortBy,
        value: sortValue
      }
    },this.props.onSort(sortBy,sortValue))
  }
  render() {
    var {sort} = this.state;
    var {by,value} = sort;
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenu1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
          >
            Sắp Xếp <span className="fa fa-caret-square-o-down ml-5" />
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li onClick={() => this.onClick('name', 1)}>
              <a role="button" 
                className={by === 'name' && value === 1 ? 'tick' : null}
              >
                <span className="fa fa-sort-alpha-asc pr-5">Tên A-Z</span>
              </a>
            </li>
            <li onClick={() => this.onClick('name', -1)}>
              <a role="button" className={by === 'name' && value === -1 ? 'tick' : null}>
                <span className="fa fa-sort-alpha-desc pr-5">Tên Z-A</span>
              </a>
            </li>
            <li role="separator" className="divider" />
            <li  onClick={() => this.onClick('status', 1)}>
              <a role="button" className={by === 'status' && value === 1 ?  'tick' : null}>Trạng Thái Kích Hoạt</a>
            </li>
            <li onClick={() => this.onClick('status', -1)}>
              <a role="button" className={by === 'status' && value === -1 ? 'tick' : null}>Trạng Thái Ẩn</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sort;
