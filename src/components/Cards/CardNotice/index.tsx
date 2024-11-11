import Base from "components/Base";
import Tags from "../Tags";
import Image from "next/image";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";

interface ICardProps {
  title: string;
  tags: string[];
  image?: string;
  description: string;
  isEditable: boolean;
}

const CardNotice = ({
  title,
  tags,
  image,
  description,
  isEditable,
}: ICardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(description);

  const handleEditClick = () => {
    setIsEditing((prev) => !prev);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedDescription(e.target.value);
  };

  return (
    <Base>
      <div className="flex flex-col py-10">
        {/* title */}
        <div className="flex flex-row flex-wrap items-baseline justify-between border-b-2 pb-5 md:gap-3 sm:gap-3">
          <h1 className="text-dark text-3xl font-medium">{title}</h1>

          <div className="flex flex-row flex-wrap gap-2 sm:pt-2">
            {tags.map((tag, index) => (
              <Tags name={tag} key={index} />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-row flex-wrap gap-5 pt-5">
          {image ? (
            <img
              src={image}
              alt="imagem da noticia"
              className="w-[40rem] h-[20rem] rounded-md object-cover"
            />
          ) : (
            <div className="bg-gray w-1/2 h-56 rounded-md" />
          )}
          {isEditable && (
            <div
              onClick={handleEditClick}
              className="flex flex-col items-center cursor-pointer"
            >
              <FaEdit className="text-dark text-lg" />
            </div>
          )}

          {isEditing ? (
            <input
              type="text"
              value={editedDescription}
              onChange={handleDescriptionChange}
              className="font-normal border-2 border-dark p-2 rounded-md w-1/2"
            />
          ) : (
            <p className="font-normal">{editedDescription}</p>
          )}
          {/* <p className="font-normal">{description}</p> */}
        </div>
      </div>
    </Base>
  );
};

export default CardNotice;
