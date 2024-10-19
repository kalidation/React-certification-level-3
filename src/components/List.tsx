type TProps<T> = {
  data: T[];
  renderItem: (data: T) => React.ReactNode;
};

const List = <T,>(props: TProps<T>) => {
  const { data, renderItem } = props;

  return (
    <div className="flex flex-row gap-x-5 overflow-scroll">
      {data.map((item) => renderItem(item))}
    </div>
  );
};

export default List;
