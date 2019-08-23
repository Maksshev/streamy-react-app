import React, {Component} from 'react'
import Routes from '../../routes'
import {Router} from 'react-router-dom'
import history from '../../history'
import Modal from 'react-modal'
import {connect} from 'react-redux'
import {openDeleteModal, closeDeleteModal, deleteStream} from "../../actions";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '20%',
        textAlign: 'center',
        zIndex: '150'
    }
};

Modal.setAppElement('#modal');

class App extends Component {

    constructor() {
        super();

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.props.openDeleteModal()
    }

    afterOpenModal() {

    }

    closeModal() {
        this.props.closeDeleteModal()
    }

    render() {
        return (
            <Router history={history}>
                <Modal isOpen={this.props.modalIsOpen}
                       onAfterOpen={this.afterOpenModal}
                       onRequestClose={this.closeModal}
                       style={customStyles}
                       contentLabel="Example modal"
                >
                    <h4 className="mb-3">Delete stream</h4>
                    <div>
                        Title: {this.props.title}
                    </div>
                    <div className="w-100 d-flex justify-content-around">
                        <button className="btn btn-danger"
                                onClick={(e) => {
                                    e.preventDefault()
                                    e.stopPropagation()
                                    this.props.deleteStream(
                                        this.props.streamId
                                    )
                                    this.props.closeDeleteModal()
                                }}
                        >
                            Delete
                        </button>
                        <button onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation();
                            this.closeModal()
                        }} className="btn btn-primary">
                            Cancel
                        </button>
                    </div>
                </Modal>
                <Routes/>
            </Router>
        );
    }
}

const mapStateToProps = state => {
    return {
        modalIsOpen: state.modal.modalIsOpen,
        streamId: state.modal.streamId,
        title: state.modal.title
    }
}

export default connect(mapStateToProps, {openDeleteModal, closeDeleteModal, deleteStream})(App);
