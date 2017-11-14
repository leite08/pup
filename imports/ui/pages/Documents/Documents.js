import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Table, Alert, Button } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Bert } from 'meteor/themeteorchef:bert';
import DocumentsCollection from '../../../api/Documents/Documents';
import { timeago, monthDayYearAtTime } from '../../../modules/dates';
import Loading from '../../components/Loading/Loading';

import './Documents.scss';

// import BootstrapPaginator from 'react-bootstrap-pagination';

const handleRemove = (documentId) => {
  if (confirm('Are you sure? This is permanent!')) {
    Meteor.call('documents.remove', documentId, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Document deleted!', 'success');
      }
    });
  }
};

// const Documents = React.createClass({
//   mixins: [ReactMeteorData],

//   pagination: new Meteor.Pagination(Documents),

//   getMeteorData: function() {
//       return {
//           documents: this.pagination.getPage(),
//           ready: this.pagination.ready()
//       };
//   },

//   renderDocument: function(document) {
//       return (
//           <li>Document #{document._id} - #{document.title}</li>
//       );
//   },

//   render: function() {
//     if (!this.pagination.ready()) {
//       return (
//           <div>Loading...</div>
//       );
//     }

//     return (!loading ? (
//         <div>
//           <ul>
//               {this.data.documents.map(this.renderDocument)}
//           </ul>
//           <DefaultBootstrapPaginator
//               pagination={this.pagination}
//               limit={10}
//               containerClass="text-center"
//               />
//         </div>
//       ) : <Loading />
//     );
//   }
// });

const Documents = ({
  loading, documents, match, history,
}) => (!loading ? (
  <div className="Documents">
    <div className="page-header clearfix">
      <h4 className="pull-left">Documents</h4>
      <Link className="btn btn-success pull-right" to={`${match.url}/new`}>Add Document</Link>
    </div>
    {documents.length ?
      <Table responsive>
        <thead>
          <tr>
            <th>Title</th>
            <th>Last Updated</th>
            <th>Created</th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          {documents.map(({
            _id, title, createdAt, updatedAt,
          }) => (
            <tr key={_id}>
              <td>{title}</td>
              <td>{timeago(updatedAt)}</td>
              <td>{monthDayYearAtTime(createdAt)}</td>
              <td>
                <Button
                  bsStyle="primary"
                  onClick={() => history.push(`${match.url}/${_id}`)}
                  block
                >
                  View
                </Button>
              </td>
              <td>
                <Button
                  bsStyle="danger"
                  onClick={() => handleRemove(_id)}
                  block
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table> : <Alert bsStyle="warning">No documents yet!</Alert>}
  </div>
) : <Loading />);

Documents.propTypes = {
  loading: PropTypes.bool.isRequired,
  documents: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withTracker(() => {
  const subscription = Meteor.subscribe('documents');
  let docs = DocumentsCollection.find().fetch();
  console.log('[Documents list] docs.length:' + docs.length);
  return {
    loading: !subscription.ready(),
    documents: docs,
  };
})(Documents);
