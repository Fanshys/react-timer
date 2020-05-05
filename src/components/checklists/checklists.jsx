import React from 'react';
import Checklist from './checklist/checklist';
import Sidebar from './sidebar/sidebar';
import { useParams, Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';
import CreateChecklist from './createChecklist/createChecklist';

const Checklists = ({ lists }) => {
  const { id } = useParams();
  const list = lists.find(list => {
    return Number(list.id) === Number(id)
  });

  return (
    <section className="checklists">
      <div className="checklists__container">
        <h1>Чеклисты</h1>
        <div className="checklists__wrapper">
          <Sidebar />
          <div className="checklist">
            <Switch>
              <Route path="/checklist/create">
                <CreateChecklist />
              </Route>
              <Route path="/checklist/:id">
                {list && <Checklist checklist={list} />}
                {!list && 'Создайте новый или выберите существующий чеклист'}
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = state => {
  return {
    lists: state.lists.lists
  }
}

export default connect(mapStateToProps, null)(Checklists);