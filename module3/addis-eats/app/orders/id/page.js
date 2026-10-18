import OrderStatus from "./OrderStatus";

async function getInitialOrder(id) {
  return {
    id,
    dish: "Kitfo Special",
    status: "Cooking in Kitchen",
    updatedAt: new Date().toLocaleTimeString(),
  };
}

export default async function OrderPage({ params }) {
  const { id } = await params;
  const initialData = await getInitialOrder(id);

  return (
    <main style={{ padding: "24px" }}>
      <h1>Addis Eats - Live Order Tracker</h1>
      <OrderStatus orderId={id} initialData={initialData} />
    </main>
  );
}
