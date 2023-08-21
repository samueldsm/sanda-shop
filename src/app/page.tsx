import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import CardProduct from '../components/ui/CardProduct';

export default function HomePage() {
  return (
    <Card  className="purple-dark text-foreground bg-background">
      <CardHeader className="mb-4">
        <h1 className="font-bold">Products</h1>
      </CardHeader>

      <CardBody>
        <h1 className="mb-3">Best Sellers</h1>
        
          <CardProduct/>
        
      </CardBody>
    </Card>
  );
}
