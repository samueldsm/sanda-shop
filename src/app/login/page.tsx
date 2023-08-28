import { AuthButtonServer } from "@/components/auth/button_server";

import { Card } from "@nextui-org/card";

export default function Login() {
  return (
    <Card 
    isBlurred
    radius="md" 
    className=" border border-fuchsia-950 mt-10"
    >
      <section className="purple-dark text-foreground bg-background my-20 p-10 grid place-content-center ">
        <h1 className="text-xl font-bold mb-10  flex justify-center">SANDA</h1>
        <h2 className="text-xl font-bold mb-4 ">Sing in</h2>
        <AuthButtonServer />
      </section>
    </Card>
  );
}
