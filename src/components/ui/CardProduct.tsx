"use client";

import { useState, useEffect } from "react";

import { Card, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";

export default function CardProduct() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? (
    <>
      <div className=" gap-2 grid grid-cols-12 px-8">
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
                <p className="text-tiny text-white/60">
                  Get a good nights sleep.
                </p>
              </div>
            </div>
            <Button radius="full" size="sm">
              View Details
            </Button>
          </CardFooter>
        </Card>

        <Card
          isFooterBlurred
          className="col-span-6 sm:col-span-6 md:col-span-4 xl:col-span-3 h-[250px]  "
        >
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src="images/card-example-6.jpeg"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10  border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">Breathing App</p>
                <p className="text-tiny text-white/60">
                  Get a good nights sleep.
                </p>
              </div>
            </div>
            <Button radius="full" size="sm">
              View Details
            </Button>
          </CardFooter>
        </Card>

        <Card
          isFooterBlurred
          className="col-span-6 sm:col-span-6 md:col-span-4  xl:col-span-3 h-[250px] "
        >
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src="images/card-example-2.jpeg"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10  border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">Breathing App</p>
                <p className="text-tiny text-white/60">
                  Get a good nights sleep.
                </p>
              </div>
            </div>
            <Button radius="full" size="sm">
              View Details
            </Button>
          </CardFooter>
        </Card>

        <Card
          isFooterBlurred
          className="col-span-6 sm:col-span-6 md:col-span-4 xl:col-span-3 h-[250px]  "
        >
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src="images/card-example-6.jpeg"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10  border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">Breathing App</p>
                <p className="text-tiny text-white/60">
                  Get a good nights sleep.
                </p>
              </div>
            </div>
            <Button radius="full" size="sm">
              View Details
            </Button>
          </CardFooter>
        </Card>
         
        <Card
          isFooterBlurred
          className="col-span-6 sm:col-span-6 md:col-span-4  xl:col-span-3 h-[250px] "
        >
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src="images/card-example-2.jpeg"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10  border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">Breathing App</p>
                <p className="text-tiny text-white/60">
                  Get a good nights sleep.
                </p>
              </div>
            </div>
            <Button radius="full" size="sm">
              View Details
            </Button>
          </CardFooter>
        </Card>

        <Card
          isFooterBlurred
          className="col-span-6 sm:col-span-6 md:col-span-4 xl:col-span-3 h-[250px]"
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
                <p className="text-tiny text-white/60">Breathing App</p>
                <p className="text-tiny text-white/60">
                  Get a good nights sleep.
                </p>
              </div>
            </div>
            <Button radius="full" size="sm">
              View Details
            </Button>
          </CardFooter>
        </Card>
        
      </div>
    </>
  ) : (
    <></>
  );
}
