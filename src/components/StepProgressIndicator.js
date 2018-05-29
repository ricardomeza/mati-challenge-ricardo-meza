import React from 'react';

const StepProgressIndicator = (props) => {
  const stepsNumber = 4;
  const steps = [];

  for (let i = 1; i <= stepsNumber; i++) {
    let stepClasses = 'step-number';
    let currentIndicator = null;

    if (i === props.currentStep) {
      stepClasses += ' current'
      currentIndicator = <div id="currentStepIndicator" className="current-step-indicator"></div>;
    }

    steps.push (
      <div key={ i } className="step-wrapper">
        <div className={ stepClasses }>
        {/* Number & Circle for this Step */}
          <div className="step-number-value">{ i }</div>
        </div>

        {/* If Steps is the current */}
        { currentIndicator }
      </div>
    );
  };


  return (
    <div className="progress-indicator-wrapper">
      { steps }
    </div>
  );
}

export default StepProgressIndicator;
