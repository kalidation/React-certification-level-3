type TProps<T> = {
  label: keyof T;
  content: string;
};

export const ItemContent = <T,>(props: TProps<T>) => {
  const { label, content } = props;

  return (
    <div className="flex flex-row gap-x-10 gap-y-5">
      <strong>{label as React.ReactNode}:</strong>
      <p>{content}</p>
    </div>
  );
};
