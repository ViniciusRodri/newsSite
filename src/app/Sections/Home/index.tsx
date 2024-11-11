"use client";

import { dataCars } from "Data/dataCards";
import CardNotice from "components/Cards/CardNotice";
import Header from "components/Header";
import ModalLogin from "components/Modals/ModalLogin";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { signOut } from "next-auth/react";

export default function SectionHome() {
  const { data: session } = useSession();
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    if (!!session) {
      signOut();
    } else {
      setOpenModal(true);
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Header onClick={handleOpenModal} isLogin={!!session} />
      {dataCars.map((news, index) => (
        <CardNotice
          key={index}
          image={news.image}
          title={news.title}
          description={news.description}
          tags={news.tags}
          isEditable={!!session}
        />
      ))}

      {openModal && !session ? <ModalLogin close={handleCloseModal} /> : ""}
    </>
  );
}
