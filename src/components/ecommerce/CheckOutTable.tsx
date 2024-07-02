import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TLineItems } from "@/Types";

type TCheckOutTable = {
  lineItems: TLineItems[] | null;
};

const CheckOutTable = ({ lineItems }: TCheckOutTable) => {
  return (
    <div className="flex-1 col-span-2 lg:overflow-y-auto lg:max-h-[55vh]">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Products</TableHead>
            <TableHead></TableHead>
            <TableHead className="text-center">Quantity</TableHead>
            <TableHead className="text-center">Subtotal</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {lineItems &&
            lineItems.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <div className="flexCenter w-20 h-20 p-1 bg-main-hover-bg dark:bg-[#111010] rounded-sm">
                    <img
                      src={product.image.url}
                      alt="product_iamge"
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                </TableCell>
                <TableCell>
                  <h1>{product.name}</h1>
                </TableCell>
                <TableCell className="text-center">
                  {product.quantity}
                </TableCell>
                <TableCell className="text-center">
                  {product.line_total.formatted_with_symbol}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CheckOutTable;
