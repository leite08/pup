import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Roles } from 'meteor/alanning:roles';
import App from '../../ui/layouts/App/App';
import '../both/api';

import '../../ui/stylesheets/app.scss';

// Meteor.startup(() => render(<App />, document.getElementById('react-root')));
Meteor.startup(() => {
    Tracker.autorun((c) => {
      if (Meteor.loggingIn() || !Roles.subscription.ready()) {
        return;
      }
  
      c.stop();
      Meteor.defer(() => render(<App />, document.getElementById('react-root')));
    });
  });