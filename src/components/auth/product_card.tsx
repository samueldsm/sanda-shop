"use client";

import {
  Card,
  Avatar,
  CardBody,
  CardHeader,
  CardFooter,
} from "@nextui-org/react";

import Link from "next/link";

import { IconHeart, MessageIcon, RepeatIcon } from "@/components/icons/";

export default function ProductCard({
  content,
  userName,
  avatarUrl,
  userFullName,
}: {
  content: string;
  userName: string;
  avatarUrl: string;
  userFullName: string;
}) {
  return (
    <Card className="shadow-none bg-transparent hover:bg-slate-800 transition border-b rounded-none cursor-pointer border-white/20">
      <CardHeader className="justify-between">
        <div className="flex gap-x-2">
          <Link href={`/${userName}`}>
            <Avatar radius="full" size="md" src={avatarUrl} />
          </Link>
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {userFullName}
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              @{userName}
            </h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-xs text-white bg-transparent">
        <p>{content}</p>
      </CardBody>
      <CardFooter className="gap-3">
        <button>
          <IconHeart className="w-4 h-4" />
        </button>
        <button>
          <MessageIcon className="w-4 h-4" />
        </button>
        <button>
          <RepeatIcon className="w-4 h-4" />
        </button>
      </CardFooter>
    </Card>
  );
}
