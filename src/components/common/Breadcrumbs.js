import React from 'react';

const Breadcrumbs = ({ items }) => {
  const breadcrumbs = items.map( (item, index) => {
    return (
      <li key={ index } className="breadcrumb-item">
        {/* If link is empty, then is the last child */}
        {
          item.link === ''
          ? <span className="active">{ item.name }</span>
          : <a href={ item.link } className="open active">{ item.name }</a>
        }
      </li>
    );
  });

  return (
    <ol className="breadcrumb">
      { breadcrumbs }
    </ol>
  );
}

export { Breadcrumbs };
