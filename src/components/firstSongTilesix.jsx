import React from 'react';
import { FaPlay } from 'react-icons/fa';

function FirstSongTilesix() {
  const tileData = [
    {
      title: 'Liked Songs',
      image:
        'https://i1.sndcdn.com/artworks-y6qitUuZoS6y8LQo-5s2pPA-t500x500.jpg',
    },
    {
      title: 'Anuv Jain',
      image: 'https://i.scdn.co/image/ab67616100005174a837a6cb82dd949d5e1f9b53',
    },
    {
      title: 'M Zee Bella',
      image:
        'https://images.genius.com/71fefbe3aa0d388a36be6602ac1d2056.640x640x1.jpg',
    },
    {
      title: 'Diljit Dosanjh',
      image:
        'https://c.ndtvimg.com/2023-10/km1qj2u8_diljit_625x300_23_October_23.jpg?im=FaceCrop,algorithm=dnn,width=384,height=384',
    },
    {
      title: 'Arijit Singh',
      image:
        'https://a10.gaanacdn.com/gn_img/artists/Dk9KNk23Bx/k9KNqJJbBx/size_xl_1638898900.webp',
    },
    {
      title: 'Kr$na',
      image:
        'https://yt3.googleusercontent.com/ytc/AIf8zZSXMsDfcmB-Olaqu_0av1XFlHq5S5qsTK5-92eL0Q=s900-c-k-c0x00ffffff-no-rj',
    },
  ];
  return (
    <div className="w-full h-32 flex flex-wrap ml-3 mt-3 mb-8">
      {tileData.map((tile) => {
        return (
          <div className="tile m-2 w-[31%] h-1/2 bg-zinc-800 rounded-[8px] flex justify-start items-center hover:bg-zinc-700 hover:transition-all">
            <div className="flex justify-start items-center h-full w-4/5">
              <img
                src={tile.image}
                alt=""
                className="h-full w-[22%] rounded-l-[8px] shadow-2xl"
              />
              <div className="ml-5 font-semibold text-md">{tile.title}</div>
            </div>
            <div className="playbutton w-[50px] h-[50px] rounded-full bg-green-500 justify-center items-center shadow-2xl">
              <FaPlay color="black" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FirstSongTilesix;
