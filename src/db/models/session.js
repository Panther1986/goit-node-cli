import { Schema, model } from 'mongoose';

const sessionShema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'users',
    },
    accessToken: {
      type: String,
      requred: true,
    },
    refreshToken: {
      type: String,
      requred: true,
    },
    accessTokenValidUntil: {
      type: Date,
      requred: true,
    },
    refreshTokenValidUntil: {
      type: Date,
      requred: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const SessionCollection = model('sessions', sessionShema);
