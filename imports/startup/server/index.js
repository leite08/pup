import './accounts';
import '../both/api';
import './api';
import './fixtures';
import './email';
import Abacates from '../../api/Abacates/Abacates';


Meteor.startup(() => {
    if (!Abacates.find().count()) {
        for (var i = 0; i < 100; i++) {
            Abacates.insert({
                title: 'Acabate #' + i,
                idx: i,
                is_enabled: (i % 5) > 0
            });
        }
    }
});