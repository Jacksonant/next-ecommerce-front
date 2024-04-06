import Featured from "@/components/Feature";
import Header from "@/components/Header";
import NewProducts from "@/components/NewProducts";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default function Home({ featuredProduct, newProduct }) {
  return (
    <>
      <Header />
      <Featured product={featuredProduct} />
      <NewProducts products={newProduct} />
    </>
  );
}

export async function getServerSideProps() {
  const featuredProductId = "660d64669dd6813bbb991d23";
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);

  const newProduct = await Product.find({}, null, {
    sort: { updatedAt: -1 },
    limit: 8,
  });
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProduct: JSON.parse(JSON.stringify(newProduct)),
    },
  };
}
