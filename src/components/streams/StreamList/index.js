import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {faCamera} from "@fortawesome/free-solid-svg-icons";
import {connect} from "react-redux";
import {fetchStreams, openDeleteModal} from "../../../actions";

class StreamList extends Component {

    componentDidMount() {
        this.props.fetchStreams();
    }

    renderAdmin = stream =>
        stream.userId === this.props.userId ?
            <div className="position-absolute edit-delete-buttons">
                <Link to={`/streams/edit/${stream.id}`} className="btn btn-primary h-100">
                    Edit
                </Link>
                <button type="button"
                        className="btn btn-danger h-100"
                        onClick={() => {
                            this.props.openDeleteModal(stream.id, stream.title)
                        }
                        }
                >
                    Delete
                </button>
            </div> :
            null

    renderList = () =>
        this.props.streams.map(stream => (
            <Link to={`/streams/${stream.id}`} className="list-group-item list-group-item-action stream-item"
                  key={stream.id}>
                <div className="d-flex justify-content-sm-between position-relative">
                    <FontAwesomeIcon icon={faCamera}/>
                    <div className="text-center">{stream.title}</div>
                    <div className="text-center">{stream.description}</div>
                    {this.renderAdmin(stream)}
                </div>
            </Link>
        ))

    renderCreateButton = () => {
        if (this.props.isSignedIn) {
            return (
                <div className="w-100 text-center">
                    <Link to="/streams/new">
                        <button type="button" className="btn btn-primary mt-5">
                            Create stream
                        </button>
                    </Link>
                </div>
            )
        }
        return null
    }

    render() {
        return (
            <div>
                <h2>
                    Streams
                </h2>
                <div className="list-group">
                    <div className="list-group-item list-group-item-action">
                        <div className="d-flex justify-content-sm-between">
                            <strong>Icon</strong>
                            <strong>Title</strong>
                            <strong>Description</strong>
                        </div>
                    </div>
                    {this.renderList()}
                </div>
                {this.renderCreateButton()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        streams: Object.values(state.streams),
        userId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, {fetchStreams, openDeleteModal})(StreamList);
