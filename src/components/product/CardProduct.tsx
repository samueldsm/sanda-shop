"use client";

import { useState, useEffect } from "react";

import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { Skeleton } from "@nextui-org/skeleton";
import { Card, CardFooter } from "@nextui-org/card";

import { IProduct } from "@/interfaces";

interface Props {
  products: IProduct[];
}

export default function CardProduct({product}:{product:IProduct}) {
  const [isClient, setIsClient] = useState(false);
  console.log(product)

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? (
    <>
      <Card
        isFooterBlurred
        className="col-span-6 sm:col-span-6 md:col-span-4 xl:col-span-3 h-[250px] "
      >
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src="images/card-example-3.jpeg"
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10  border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">
                House Cybertruck Horizon Plant
              </p>
              <p className="text-tiny text-white/60">$ 13.99</p>
            </div>
          </div>
          <Button radius="full" size="sm">
            View Details
          </Button>
        </CardFooter>
      </Card>
    </>
  ) : (
    <>
      <div className="flex flex-col gap-3 col-span-6 sm:col-span-6 md:col-span-4 xl:col-span-3 h-[250px] ">
        <Card className="w-[250px] space-y-5 p-4" radius="sm">
          <Skeleton className="rounded-lg">
            <div className="h-24 rounded-lg bg-secondary"></div>
          </Skeleton>
          <div className="space-y-3">
            <Skeleton className="w-4/5 rounded-lg">
              <div className="h-3 w-full rounded-lg bg-secondary-300"></div>
            </Skeleton>
            <Skeleton className="w-2/5 rounded-lg">
              <div className="h-3 w-full rounded-lg bg-secondary-200"></div>
            </Skeleton>
          </div>
        </Card>
      </div>
    </>
  );
}
