import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import ModalSteps from './ModalSteps';
import { Breadcrumbs, FakeWindow } from './common'
import '../css/main-content.css';

const breadcrumbsItems = [
  {name: 'Demos', link: '/'},
  {name: 'Web SDK Demo', link: ''}
]

class MainContent extends Component {
  state = {
    showModal: false
  }

  openModalHandler = () => {
    this.setState({ showModal: true })
  }

  closeModalHandler = () => {
    this.setState({ showModal: false })
  }

  render() {
    const { showModal } = this.state;

    return (
      <main className="main">
        {/* User Account Name & Image */}
        <header className="app-header navbar">
          <div className="user-data">
            <p>Hey, Ricardo!</p>
            <div className="icon"></div>
          </div>
        </header>

        {/* Breadcrumbs */}
        <Breadcrumbs items={ breadcrumbsItems } />

        {/* Fake Window */}
        <FakeWindow
          title       = "Regístrate para covertirte en conductor"
          buttonTitle = "Comenzar registro"
          onClick     = { this.openModalHandler }
        />

        {/* Modal To Start the Registry */}
        <Modal
          open          = { showModal }
          onClose       = { this.closeModalHandler }
          closeIconSize = { 16 }
          classNames    = {{ overlay: 'modal-overlay', modal: 'modal-custom', closeButton: 'modal-close-button' }}
          center
        >
          {/* All the Steps for this process */}
          <ModalSteps onCloseModal={ this.closeModalHandler }/>
        </Modal>
      </main>
    );
  }
}

export default MainContent;
