import React from 'react';
import { Button } from 'react-bootstrap';

const latestNews= ({ title, description, date, imageUrl }) => {
  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <img src="/course.jpg" className="card-img-top" alt={title} />
        <img src={'/images/product/list/' + imageUrl + '.jpg'} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <small className="text-muted">{date}</small>
            <Button variant="outline-secondary">閱讀更多</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default latestNews;
