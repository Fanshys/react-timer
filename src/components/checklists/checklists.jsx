import React from 'react';
import Checklist from './checklist';
import Sidebar from './sidebar';
import { useParams } from "react-router-dom";
import { connect } from 'react-redux';

const Checklists = ({ lists }) => {
  const { id } = useParams();
  const list = lists.find(list => Number(list.id) === Number(id));

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

const mapStateToProps = state => {
  return {
    lists: state.lists.lists
  }
}

export default connect(mapStateToProps, null)(Checklists);