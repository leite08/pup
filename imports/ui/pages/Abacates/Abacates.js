import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import DataTablesList from '../../components/DataTablesList';
// import Documents from '../../../api/documents/documents';
import AbacatesCollection from '../../../api/Abacates/Abacates';

class DataTables extends Component {
  constructor(props) {
    super(props);

    this.pagination = new Meteor.Pagination(AbacatesCollection, {
      name: 'abacates.paginatedList',
      filters: {},
      sort: {},
      perPage: 10,
      reactive: true,
      debug: true,
    });
  }

  render() {
    const {
      pagination,
    } = this;

    return (
      <div className="Documents">
        <Row>
          <Col xs={12}>
            <div className="page-header clearfix">
              <h4 className="pull-left">React Data Grid Documents</h4>
              <Link to="/documents/new">
                <Button
                  bsStyle="success"
                  className="pull-right"
                >
                  New Document
                </Button>
              </Link>
            </div>
            <DataTablesList pagination={pagination} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default DataTables;







// import { Meteor } from 'meteor/meteor';
// import { createContainer, withTracker } from 'meteor/react-meteor-data';
// import React, { Component } from 'react';
// import { render } from 'react-dom';
// import BootstrapPaginator from 'react-bootstrap-pagination';
// import AbacatesCollection from '../../../api/Abacates/Abacates';

// class DoubleInnerComp extends Component {
//     renderDocument(document) {
//       return (
//         <li key={document._id}>Document #{document.idx}: {document.title}  </li>
//       );
//     }
  
//     render() {
//       if (!this.props.ready) {
//           return (
//               <div>Loading...</div>
//           );
//       }
  
//       return (
//         <div>
//             <ul>
//                 {this.props.documents.map(this.renderDocument)}
//             </ul>
//             <BootstrapPaginator
//                 pagination={this.props.pag}
//                 limit={10}
//                 containerClass="text-left"
//                 />
//         </div>
//       );
//     }
// }

// const InnerComp = withTracker(({ pagination }) => {
//     console.log('[InnerComp] pagination: ' + pagination);
//     console.log('[InnerComp] pagination.getPage().length: ' + pagination.getPage().length);
//     console.log('[InnerComp] pagination.ready(): ' + pagination.ready());
//     return {
//         ready: pagination.ready(),
//         documents: pagination.getPage(),
//         pag: pagination
//     };
// })(DoubleInnerComp);



// class Abacates extends Component {
//     constructor(props) {
//       super(props);
  
//       this.pagination = new Meteor.Pagination(AbacatesCollection, {
//         filters: {
//           idx: {$gt: 9}
//         },
//         sort: {
//           title: 1
//         },
//         debug: true 
//       });
//     }
//     render() {
//         console.log('[render()] pagination: ' + this.pagination);
//         return (
//           <InnerComp pagination={this.pagination} />
//         );
//     }
// }

// export default Abacates;




// class Abacates extends Component {
//     constructor(props) {
//       super(props);
  
//       this.pagination = new Meteor.Pagination(AbacatesCollection, {
//         filters: {
//           idx: {$gt: 9}
//         },
//         sort: {
//           title: 1
//         },
//         debug: true
//       });
//     }
//     renderDocument(document) {
//       return (
//         <li key={document._id}>Document #{document.idx}: {document.title}  </li>
//       );
//     }
//     render() {
//       if (!this.pagination.ready()) {
//           return (
//               <div>Loading...</div>
//           );
//       }
//       return (
//         <div>
//             <ul>
//                 {this.pagination.getPage().map(this.renderDocument)}
//             </ul>
//             <BootstrapPaginator
//                 pagination={this.pagination}
//                 limit={10}
//                 containerClass="text-left"
//                 />
//         </div>
//       );
//     }
// }
// export default Abacates;




// class InfoPage extends Component {
//     render() {
//       return (
//         <div>
//           <h2>Learn Meteor!</h2>
//           <ul>
//             <li><a href="https://www.meteor.com/try" target="_blank">Do the Tutorial</a></li>
//             <li><a href="http://guide.meteor.com" target="_blank">Follow the Guide</a></li>
//             <li><a href="https://docs.meteor.com" target="_blank">Read the Docs</a></li>
//             <li><a href="https://forums.meteor.com" target="_blank">Discussions</a></li>
//           </ul>
//         </div>
//       );
//     }
//   }
  
//   class HomePageBody extends Component {
//     renderDocument(document) {
//       return (
//         <li key={document._id}>Document #{document.idx}: {document.title}  </li>
//       );
//     }
  
//     render() {
//       if (!this.props.ready) {
//           return (
//               <div>Loading...</div>
//           );
//       }
  
//       return (
//         <div>
//             <ul>
//                 {this.props.documents.map(this.renderDocument)}
//             </ul>
//             <BootstrapPaginator
//                 pagination={this.props.pag}
//                 limit={10}
//                 containerClass="text-left"
//                 />
//         </div>
//       );
//     }
//   }
  
//   const HomePage = withTracker(({ params }) => {
//     return {
//       ready: params.pag.ready(),
//       documents: params.pag.getPage()
//     };
//   })(HomePageBody);
  
//   class Abacates extends Component {
//     constructor(props) {
//       super(props);
  
//       this.pagination = new Meteor.Pagination(AbacatesCollection, {
//         filters: {
//           idx: {$gt: 9}
//         },
//         sort: {
//           title: 1
//         },
//         debug: true
//       });
//       this.state = {currentTemplate: "home"};
//     }
  
//     handleTabClick(name) {
//       this.setState({currentTemplate: name.toLowerCase()});
//     }
  
//     renderTab(name) {
//       let tabClass = "";
  
//       if (this.state.currentTemplate === name.toLowerCase()) {
//         tabClass += "active";
//       }
  
//       return (
//         <li role="presentation" onClick={this.handleTabClick.bind(this, name)} className={tabClass}><a href="#">{name}</a></li>
//       );
//     }
  
//     render() {
//       return (
//         <div>
//           <ul className="nav nav-tabs">
//             {this.renderTab('Home')}
//             {this.renderTab('Info')}
//           </ul>
//           {this.state.currentTemplate === "home" ? <HomePage pag={this.pagination} params={{pag: this.pagination}} /> : <InfoPage />}
//         </div>
//       );
//     }
//   }
//   export default Abacates;