interface IButtonProps {
  name: string;
  background: string;
  onClick: () => void;
}

const ButtonLogin = ({ name, background, onClick }: IButtonProps) => {
  return (
    <button
      className={`bg-${background} rounded-md px-5 py-1.5 text-base text-dark font-semibold hover:bg-gray`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default ButtonLogin;
