import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Documents from '../Documents';

Meteor.publish('documents', function documents() {
  let docs = Documents.find({ owner: this.userId });
  console.log('[publish.documents] docs.length:' + docs.count());
  return docs;
});

// Note: documents.view is also used when editing an existing document.
Meteor.publish('documents.view', function documentsView(documentId) {
  check(documentId, String);
  return Documents.find({ _id: documentId, owner: this.userId });
});
