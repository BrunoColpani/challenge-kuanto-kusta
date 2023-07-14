import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        'mongodb+srv://admim:ZARfg08SdH4nK3mq@cluster0.rpv3a34.mongodb.net/?retryWrites=true&w=majority',
      ),
  },
];
