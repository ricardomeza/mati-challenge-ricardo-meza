import React, { Component } from 'react';
import CameraPhoto, { FACING_MODES } from 'jslib-html5-camera-photo';
import StepProgressIndicator from './StepProgressIndicator';
import stepWelcomeImg from '../img/intro-block--mati.png';

class ModalSteps extends Component {
  constructor (props) {
    super(props);
    this.cameraPhoto = null;
    this.videoRef = React.createRef();
    this.appMiscData = JSON.parse(localStorage.appMiscData);

    this.state = {
      step: 0
    }
  }

  componentDidMount () {
    // Get Reference from <video> tag
    this.cameraPhoto = new CameraPhoto(this.videoRef.current);
  }

  componentDidUpdate() {
    // Change Colors for Final Step (number 4)
    if (this.state.step === 4) {
      // Step Wrapper Background
      document.getElementById('stepContentWrapperFinal').classList.add('white-bg');

      // Up Arrow
      document.getElementById('currentStepIndicator').classList.add('border-bottom-color-white');

      // Title
      document.getElementById('stepContentWrapperFinalTitle').classList.add('primary-font-color');
    }
  }

  startCamera = () => {
    this.cameraPhoto.startCamera(FACING_MODES.ENVIRONMENT, { width: 640, height: 480 })
      .then(() => {
        console.log('camera is started !');
      })
      .catch((error) => {
        console.error('Camera not started!', error);
      });
  }

  stopCamera = () => {
    this.cameraPhoto.stopCamera()
      .then(() => {
        console.log('Camera stoped!');
      })
      .catch((error) => {
        console.log('No camera to stop!:', error);
      });
  }

  goToStep = number => {
    this.setState({
      step: number
    })
  }

  modalProcessTitle = () => {
    return (
      <div className="step-texts-wrapper">
        <p className="title">Registro de identidad</p>
      </div>
    );
  };

  userAccountNameAndIcon = () => {
    return (
      <div className="registry-modal-user-data">
        <div className="user-data">
          <div className="icon"></div>
          <p>Demo de Negocio</p>
        </div>
      </div>
    );
  };

  getWelcomeContent = () => {
    return (
      <div className="registry-modal-step-wrapper">
        {/* <video ref={this.videoRef} autoPlay="true" /> */}
        {/* User Account Name & Icon */}
        { this.userAccountNameAndIcon() }

        {/* Modal Content */}
        <div className="registry-modal-content">
          <div className="step-welcome-wrapper">
            {/* Step Title and Subtitle */}
            <div className="step-welcome-texts-wrapper">
              <p className="title">Registro de identidad</p>
              <p className="subtitle">Registra y verifica tu identificación
              personal, fácil y seguro.</p>
            </div>

            {/* Icons */}
            <div className="step-welcome-img-wrapper">
              <img src={ stepWelcomeImg } alt="" />
            </div>

            {/* Button */}
            <div className="button-wrapper">
              <button className="mati-button-modal" onClick={ () => this.goToStep(1) }>
                <p className="title">Comenzar verificación</p>
                <div className="icon">></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  getFirstStepContent = () => {
    return (
      <div className="registry-modal-step-wrapper">
        {/* User Account Name & Icon */}
        { this.userAccountNameAndIcon() }

        {/* Modal Content */}
        <div className="registry-modal-content">
          {/* Process Title */}
          { this.modalProcessTitle() }

          {/* Current Step Number */}
          <StepProgressIndicator currentStep={ 1 } />

          {/* Step Title & Description */}
          <div className="step-content-wrapper">
            <div className="texts-wrapper">
              <p className="title">Rostro</p>
              <p className="description">Acercate a la cámara y mantén tu rostro
              dentro del límite.</p>
            </div>

            {/* Camera Will Display Here */}
            <div className="registry-tool">
              <div className="face"></div>
            </div>

            {/* Button & Link */}
            <div className="button-wrapper">
              <button className="mati-button-modal" onClick={ () => this.goToStep(2) }>
                <p className="title">Registrar y continuar</p>
                <div className="icon">></div>
              </button>

              <div className="link">
                <a href="/">o sube una foto desde tu computadora</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  getSecondStepContent = () => {
    return (
      <div className="registry-modal-step-wrapper">
        {/* User Account Name & Icon */}
        { this.userAccountNameAndIcon() }

        <div className="registry-modal-content">
          {/* Process Title */}
          { this.modalProcessTitle() }

          {/* Current Step Number */}
          <StepProgressIndicator currentStep={ 2 } />

          {/* Step Title & Description */}
          <div className="step-content-wrapper">
            <div className="texts-wrapper">
              <p className="title">Identificación oficial – Frontal</p>
              <p className="description">Sujeta tu identificación, acércala y 
              manténla dentro del límite.</p>
            </div>

            {/* Camera Will Display Here */}
            <div className="registry-tool">
              <div className="card"></div>
            </div>

            {/* Button & Link */}
            <div className="button-wrapper">
              <button className="mati-button-modal" onClick={ () => this.goToStep(3) }>
                <p className="title">Registrar y continuar</p>
                <div className="icon">></div>
              </button>

              <div className="link">
                <a href="/">o sube una foto desde tu computadora</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  getThirdStepContent = () => {
    return (
      <div className="registry-modal-step-wrapper">
        {/* User Account Name & Icon */}
        { this.userAccountNameAndIcon() }

        <div className="registry-modal-content">

          {/* Process Title */}
          { this.modalProcessTitle() }

          {/* Current Step Number */}
          <StepProgressIndicator currentStep={ 3 } />

          {/* Step Title & Description */}
          <div className="step-content-wrapper">
            <div className="texts-wrapper">
              <p className="title">Identificación oficial – Trasera</p>
              <p className="description">Sujeta tu identificación, acércala y 
              manténla dentro del límite.</p>
            </div>

            {/* Camera Will Display Here */}
            <div className="registry-tool">
              <div className="card"></div>
            </div>

            {/* Button & Link */}
            <div className="button-wrapper">
              <button className="mati-button-modal" onClick={ () => this.goToStep(4) }>
                <p className="title">Registrar y continuar</p>
                <div className="icon">></div>
              </button>

              <div className="link">
                <a href="/">o sube una foto desde tu computadora</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  getFourthStepContent = () => {
    return (
      <div className="registry-modal-step-wrapper">
        {/* User Account Name & Icon */}
        { this.userAccountNameAndIcon() }

        <div className="registry-modal-content">
          {/* Process Title */}
          { this.modalProcessTitle() }

          {/* Current Step Number */}
          <StepProgressIndicator currentStep={ 4 } />

          {/* Step Title & Description */}
          <div id='stepContentWrapperFinal' className="step-content-wrapper final-step-img">
            <div className="texts-wrapper">
              <p id="stepContentWrapperFinalTitle" className="title">¡Felicidades!</p>
              <p className="description">Hemos registrado tu identidad verificada.</p>
            </div>

            {/* Button & Link */}
            <div className="button-wrapper">
              <button className="mati-button-modal" onClick={ () => this.props.onCloseModal() }>
                <p className="title">Cerrar</p>
              </button>

            <div className="powered-by">
              <p>powered by { this.appMiscData.brandName }</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  getStepContent = step => {
    let content = null;

    switch (step) {
      case 0:
        content = this.getWelcomeContent();
        break;

      case 1:
        content = this.getFirstStepContent();
        break;

      case 2:
        content = this.getSecondStepContent();
        break;

      case 3:
        content = this.getThirdStepContent();
        break;

      case 4:
        content = this.getFourthStepContent();
        break;

      default:
        content = <div>This is not the Step you are looking for…</div>;
    }

    return content;
  }

  render() {
    const { step } = this.state;

    if (this.cameraPhoto) {
      // this.startCamera();
    }

    return (
      <div>
        { this.getStepContent(step) }
      </div>
    );
  }
}

export default ModalSteps;
