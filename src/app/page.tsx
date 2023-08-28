import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import { Card, CardBody, CardHeader } from "@nextui-org/card";

import Header from "@/components/ui/Header";
import CardProduct from "@/components/product/CardProduct";

import { Database } from "@/types/database";

export default async function HomePage () {
  // const supabase = createServerComponentClient({ cookies });
  // const { data: product, error } = await supabase.from("product").select();
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session === null) {
    redirect("/login");
  }

  const { data: product, error } = await supabase.from("product").select("*");

  console.log("Server side " + product);

  const userAvatar = session.user?.user_metadata?.avatar_url;

  return (
    <>
      <Header userAvatar={userAvatar} />
      <Card className="purple-dark text-foreground bg-background">
        <CardHeader className="mb-4">
          <h1 className="font-bold">Products</h1>
        </CardHeader>

        <CardBody>
          <h1 className="mb-3">Best Sellers</h1>

          <div className=" gap-5 grid grid-cols-12 px-8">
            {product?.map((product) => (
              <>
                <CardProduct key={product.slug} {...product} />
              </>
            ))}
          </div>
        </CardBody>
      </Card>
    </>
  );
}
