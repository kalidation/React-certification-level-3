import { FC } from "react";

type TProps = {
  url: string;
  onClick: VoidFunction;
};

const ItemList: FC<TProps> = (props) => {
  const { url, onClick } = props;

  return (
    <div className="w-[100px] h-[100px] hover:scale-125">
      <button onClick={onClick}>
        <img src={url} />
      </button>
    </div>
  );
};

export default ItemList;
