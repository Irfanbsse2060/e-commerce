import { getDb } from "../migrations-utils/db";


export const up = async () => {
  const db = await getDb();
  const PRODUCTS = [
    {
      pid: "001",
      name: "Rolex",
      unitPrice: 100,
      discount: {
        quantity: 3,
        price: 200
      }
    },
    {
      pid: "002",
      name: "Michael Kors",
      unitPrice: 80,
      discount: {
        quantity: 2,
        price: 120
      }
    },
    {
      pid: "003",
      name: "Swatch",
      unitPrice: 50
    },
    {
      pid: "004",
      name: "Casio",
      unitPrice: 30
    }
  ];
  const insertResult = await db.collection("products").insertMany(PRODUCTS);
  console.log("Inserted documents =>", insertResult);
};

export const down = async () => {
  const db = await getDb();
  const deleteResult = await db.collection("products").deleteMany();
  console.log("Removed documents =>", deleteResult);
};
