import React from 'react';
import Checklist from './checklist/checklist';
import Sidebar from './sidebar/sidebar';
import { useParams } from "react-router-dom";

const checklistDate = {
  1: {
    1: {
      name: 'Проверить то то',
      checked: false
    },
    2: {
      name: 'Скачать пятое',
      checked: false
    },
    3: {
      name: 'Попробовать десятое',
      checked: false
    },
    4: {
      name: 'Проверить то то',
      checked: false
    },
    5: {
      name: 'Проверить то то',
      checked: false
    },
  },
  2: {
    1: {
      name: 'Проверить то то 3',
      checked: false
    },
    2: {
      name: 'Скачать пятое 5',
      checked: false
    },
    3: {
      name: 'Попробовать десятое',
      checked: false
    },
    4: {
      name: 'Проверить то то',
      checked: false
    },
    5: {
      name: 'Проверить то то',
      checked: false
    },
  },
  3: {
    1: {
      name: 'Проверить то то',
      checked: false
    },
    2: {
      name: 'Скачать пятое',
      checked: false
    },
    3: {
      name: 'Попробовать десятое',
      checked: false
    },
    4: {
      name: 'Проверить т41',
      checked: false
    },
    5: {
      name: 'Проверить 1441о',
      checked: false
    },
  },
}

const Checklists = (props) => {
  let {id} = useParams();

  return (
    <section className="checklists">
      <div className="checklists__container">
        <h1>Чеклисты</h1>
        <div className="checklists__wrapper">
          <Sidebar />
          <div className="checklist">
            {id && <Checklist checklist={checklistDate[id]} id={id} />}
            {!id && 'Создайте новый или выберите существующий чеклист'}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Checklists;