import { getDb } from '../migrations-utils/db';
import products from '../../mocks/products';

export const up = async () => {
  const db = await getDb();
  const insertResult = await db.collection('products').insertMany(products);
  console.log('Inserted documents =>', insertResult);
};

export const down = async () => {
  const db = await getDb();
  const deleteResult = await db
    .collection('products')
    .deleteMany({ pid: { $in: products.map((product) => product.pid) } });
  console.log('Removed documents =>', deleteResult);
};
