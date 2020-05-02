import React from 'react';
import {
  useParams
} from "react-router-dom";

const Checklist = (props) => {
	let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}

export default Checklist;