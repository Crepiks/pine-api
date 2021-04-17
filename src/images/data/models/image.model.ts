import { Model } from 'objection';

export class ImageModel extends Model {
  static tableName = 'images';

  id!: number;
  path!: string;
  userId!: number;
  lat?: number;
  lon?: number;
  city?: string;
  deviceModel?: string;
  createdAt?: string;

  static get relationMappings() {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: UserModel,
        join: {
          from: 'images.userId',
          to: 'users.id',
        },
      },
    };
  }
}

class UserModel extends Model {
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
