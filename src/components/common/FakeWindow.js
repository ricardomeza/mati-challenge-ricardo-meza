import React from 'react';

const FakeWindow = ({ title, buttonTitle, onClick }) => {
  return(
    <div className="card card-window">
      {/* Fake Window Actions Buttons */}
      <div className="card-window-title">
        <div className="window-buttons-wrapper">
          <div className="window-button"></div>
          <div className="window-button"></div>
          <div className="window-button"></div>
        </div>
      </div>

      {/* Content */}
      <div className="card-content">
        {/* Modal */}
        <div className="card card-client-registry">
          <div className="icon"></div>

          <p className="text">{ title }</p>

          <div className="button-wrapper">
            <button className="mati-button" onClick={ onClick }>
              <p>{ buttonTitle }</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { FakeWindow };