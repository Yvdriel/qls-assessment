import { api } from 'src/boot/axios';

interface Address {
  companyname: string;
  name: string;
  street: string;
  housenumber: string;
  zipcode: string;
  city: string;
  country: string;
}

interface Order {
  number: string;
  delivery_address: Address;
  billing_address: Address & { email: string };
}

const createShipment = ({
  order,
  product_id,
  product_combination_id,
}: {
  order: Order;
  product_id: number;
  product_combination_id: number;
}) => {
  const payload = {
    brand_id: 'e41c8d26-bdfd-4999-9086-e5939d67ae28',
    reference: order.number,
    weight: 1000,
    product_id,
    product_combination_id,
    cod_amount: 0,
    piece_total: 1,
    receiver_contact: {
      companyname: order.delivery_address.companyname,
      name: order.delivery_address.name,
      street: order.delivery_address.street,
      housenumber: order.delivery_address.housenumber,
      postalcode: order.delivery_address.zipcode,
      locality: order.delivery_address.city,
      country: order.delivery_address.country,
      email: order.billing_address.email,
    },
  };

  api
    .post(
      `${process.env.BASE_URL}/company/${process.env.COMPANY_ID}/shipment/create`,
      payload
    )
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

export { createShipment };
