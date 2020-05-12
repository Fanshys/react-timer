import React from 'react';
import Checklist from './checklist';
import Sidebar from './sidebar';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

class Checklists extends React.Component {
  componentDidUpdate() {
    const json = JSON.stringify(this.props.lists)

		localStorage.setItem('lists', json)
  }

  render() {
    const list = this.props.lists.find(list => Number(list.id) === Number(this.id = this.props.match.params.id));

    return (
      <section className="checklists">
        <div className="checklists__container">
          <h1>Чеклисты</h1>
          <div className="checklists__wrapper">
            <Sidebar />
            <div className="checklist">
              {list && <Checklist checklist={list} />}
              {!list && 'Создайте новый или выберите существующий чеклист'}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    lists: state.lists.lists
  }
}

export default withRouter(connect(mapStateToProps, null)(Checklists));