import { Model } from 'objection';

export class UserModel extends Model {
  static tableName = 'users';

  id!: number;
  email!: string;
  createdAt!: string;

  static get relationMappings() {
    const ImageModel = require('./image.model');

    return {
      images: {
        relation: Model.HasManyRelation,
        modelClass: ImageModel,
        join: {
          from: 'users.id',
          to: 'images.userId',
        },
      },
    };
  }
}
