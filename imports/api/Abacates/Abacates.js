import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const AbacatesCollection = new Mongo.Collection('abacates');

AbacatesCollection.attachSchema(new SimpleSchema({
    title: String,
    idx: Number,
    is_enabled: Boolean
}));

export default AbacatesCollection;