"use client";

import Base from "components/Base";
import ButtonLogin from "components/Buttons/ButtonLogin";
import Image from "next/image";

interface IHeaderProps {
  onClick: () => void;
  isLogin: boolean;
}

const Header = ({ onClick, isLogin = false }: IHeaderProps) => {
  return (
    <div className=" bg-dark w-full  justify-start  text-white text-6xl">
      <div className="flex flex-row items-center justify-end p-4 gap-2 ">
        <ButtonLogin
          name={isLogin ? "Logout" : "Login"}
          background="white"
          onClick={onClick}
        />
      </div>
      <Base>
        <div className="flex flex-row items-baseline justify-between py-4">
          <div className="flex flex-row gap-1">
            <Image
              src="/news.svg"
              alt="Icon notícias"
              width={48}
              height={48}
              className="mr-4"
            />
            <h1 className="font-semibold">News Site</h1>
          </div>
        </div>
        {isLogin && (
          <p className="py-3 text-base font-semibold text-red">
            Você está um ambiente de edição!!!
          </p>
        )}
      </Base>
    </div>
  );
};

export default Header;
