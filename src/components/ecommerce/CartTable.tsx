import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import Delete from "@/assets/svg/delete.svg?react";
import { TLineItems, TLoading } from "@/Types";
import { LottieHandler } from "../feedback";
import useCartTable from "@/Hooks/componentsHooks/useCartTable";

type TCartTable = {
  lineItems: TLineItems[] | null;
  loadingModify: TLoading;
};

const CartTable = ({ lineItems, loadingModify }: TCartTable) => {
  const { DeleteProduct, increaseQuantity, decreaseQuantity } = useCartTable();
  if (loadingModify === "pending") {
    return (
      <div className="flex-1 col-span-2 flex items-center justify-center ">
        <LottieHandler type="loadingDots" fullscreen={true} Style="w-5/12" />
      </div>
    );
  }

  return (
    <div className="flex-1 col-span-2 lg:overflow-y-auto lg:h-[45vh]">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Products</TableHead>
            <TableHead></TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Subtotal</TableHead>
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
                <TableCell>
                  <div className="flex items-center justify-between lg:w-32 w-24 gap-x-2">
                    <Button
                      variant="outline"
                      className="text-xl w-8 h-8"
                      onClick={() =>
                        decreaseQuantity(product.id, product.quantity)
                      }
                    >
                      -
                    </Button>
                    <span className=" p-3 border-2 w-8 h-8 rounded-md flexCenter">
                      {product.quantity}
                    </span>
                    <Button
                      variant="outline"
                      className="text-xl w-8 h-8 "
                      onClick={() =>
                        increaseQuantity(product.id, product.quantity)
                      }
                    >
                      +
                    </Button>
                  </div>
                </TableCell>
                <TableCell>{product.price.formatted_with_symbol}</TableCell>
                <TableCell>
                  {product.line_total.formatted_with_symbol}
                </TableCell>
                <TableCell>
                  <button onClick={() => DeleteProduct(product.id)}>
                    <Delete className="w-5 h-5 cursor-pointer" />
                  </button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CartTable;
