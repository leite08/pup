import AbacatesCollection from '../Abacates';
import { publishPagination } from 'meteor/kurounin:pagination';

// publishPagination(AbacatesCollection, {
//     filters: {}
//     // filters: {is_enabled: true,is_published: true}
// });

new Meteor.Pagination(AbacatesCollection, {
    name: 'abacates.paginatedList',
    /* filters: {
      is_enabled: true,
    }, */
});