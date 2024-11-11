interface ITagProps {
  name: string;
}

const Tags = ({ name }: ITagProps) => {
  return (
    <div className="rounded-full bg-gray border border-dark px-3">{name}</div>
  );
};

export default Tags;
