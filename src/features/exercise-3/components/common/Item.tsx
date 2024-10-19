import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FC, PropsWithChildren } from "react";

type TProps = PropsWithChildren<{
  title: string;
}>;

const Item: FC<TProps> = (props) => {
  const { title, children } = props;

  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-y-2">{children}</CardContent>
    </Card>
  );
};

export default Item;
