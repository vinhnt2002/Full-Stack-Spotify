import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import { useUser } from "@/hooks/useUser";
import useAuthModal from "@/hooks/useAuthModal";
import useUploadModal from "@/hooks/useUploadModal";
import { Song } from "@/type";
import LibaryItem from "./Item/LibaryItem";

interface LibaryProps{
  songs: Song[]
}

const Libary: React.FC<LibaryProps> = ({songs}) => {

  const authModal = useAuthModal();
  const uploadModal = useUploadModal();

  const {user} = useUser();

  const onClick = () => {
    if(!user){
      return authModal.onOpen();
    }

    return uploadModal.onOpen();
  };

  return (
    <div className="flex flex-col">
      <div
        className="
     flex 
     items-center
     justify-between
     px-5
     py-4
    "
      >
        <div
          className="
        inline-flex
        items-center
        gap-x-2
        "
        >
          <TbPlaylist className="text-neutral-400" size={26} />
          <p
            className="
            text-neutral-400
            font-medium
            text-md
            "
          >
            Your Libary
          </p>
        </div>
        <AiOutlinePlus
          onClick={onClick}
          size={20}
          className="
        text-neutral-400
        cursor-pointer
        hover:text-white
        transition
        "
        />
      </div>
      <div
        className="
        flex
        flex-col
        gap-y-2
        mt-4
        px-3
        "
      >
        {/* List of song here */}
        {songs.map((item) =>(
            <LibaryItem
            onClick={() =>{}}
            key={item.id}
            data={item}
            />
        ))}
      </div>
    </div>
  );
};

export default Libary;
