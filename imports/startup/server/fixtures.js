import seeder from '@cleverbeagle/seeder';
import { Meteor } from 'meteor/meteor';
import Documents from '../../api/Documents/Documents';

const wipe = false;

const documentsSeed = userId => ({
  collection: Documents,
  environments: ['development', 'staging'],
  noLimit: true,
  wipe: wipe,
  modelCount: 50,
  model(dataIndex) {
    return {
      owner: userId,
      title: `Document #${dataIndex + 1}`,
      body: `This is the body of document #${dataIndex + 1}`,
    };
  },
});

seeder(Meteor.users, {
  environments: ['development', 'staging'],
  noLimit: true,
  wipe: wipe,
  data: [{
    email: 'leite08@gmail.com',
    password: 'leite',
    profile: {
      name: {
        first: 'Andy',
        last: 'Warhol',
      },
    },
    roles: ['admin'],
    data(userId) {
      return documentsSeed(userId);
    },
  }],
  // modelCount: 5,
  // model(index, faker) {
  //   const userCount = index + 1;
  //   return {
  //     email: `user+${userCount}@test.com`,
  //     password: 'password',
  //     profile: {
  //       name: {
  //         first: faker.name.firstName(),
  //         last: faker.name.lastName(),
  //       },
  //     },
  //     roles: ['user'],
  //     data(userId) {
  //       return documentsSeed(userId);
  //     },
  //   };
  // },
});
