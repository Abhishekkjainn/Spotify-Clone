import React from 'react';
import { LuLibrary } from 'react-icons/lu';

function BottomSideBar() {
  const tileData = [
    {
      title: 'Liked Songs',
      image:
        'https://i1.sndcdn.com/artworks-y6qitUuZoS6y8LQo-5s2pPA-t500x500.jpg',
      desc: 'Artist',
    },
    {
      title: 'Anuv Jain',
      image: 'https://i.scdn.co/image/ab67616100005174a837a6cb82dd949d5e1f9b53',
      desc: 'Artist',
    },
    {
      title: 'M Zee Bella',
      image:
        'https://images.genius.com/71fefbe3aa0d388a36be6602ac1d2056.640x640x1.jpg',
      desc: 'Artist',
    },
    {
      title: 'Diljit Dosanjh',
      image:
        'https://c.ndtvimg.com/2023-10/km1qj2u8_diljit_625x300_23_October_23.jpg?im=FaceCrop,algorithm=dnn,width=384,height=384',
      desc: 'Artist',
    },
    {
      title: 'Arijit Singh',
      image:
        'https://a10.gaanacdn.com/gn_img/artists/Dk9KNk23Bx/k9KNqJJbBx/size_xl_1638898900.webp',
      desc: 'Artist',
    },
    {
      title: 'Kr$na',
      image:
        'https://yt3.googleusercontent.com/ytc/AIf8zZSXMsDfcmB-Olaqu_0av1XFlHq5S5qsTK5-92eL0Q=s900-c-k-c0x00ffffff-no-rj',
      desc: 'Artist',
    },
    {
      title: 'Liked Songs',
      image:
        'https://i1.sndcdn.com/artworks-y6qitUuZoS6y8LQo-5s2pPA-t500x500.jpg',
      desc: 'Artist',
    },
    {
      title: 'Anuv Jain',
      image: 'https://i.scdn.co/image/ab67616100005174a837a6cb82dd949d5e1f9b53',
      desc: 'Artist',
    },
    {
      title: 'M Zee Bella',
      image:
        'https://images.genius.com/71fefbe3aa0d388a36be6602ac1d2056.640x640x1.jpg',
      desc: 'Artist',
    },
    {
      title: 'Diljit Dosanjh',
      image:
        'https://c.ndtvimg.com/2023-10/km1qj2u8_diljit_625x300_23_October_23.jpg?im=FaceCrop,algorithm=dnn,width=384,height=384',
      desc: 'Artist',
    },
    {
      title: 'Arijit Singh',
      image:
        'https://a10.gaanacdn.com/gn_img/artists/Dk9KNk23Bx/k9KNqJJbBx/size_xl_1638898900.webp',
      desc: 'Artist',
    },
    {
      title: 'Kr$na',
      image:
        'https://yt3.googleusercontent.com/ytc/AIf8zZSXMsDfcmB-Olaqu_0av1XFlHq5S5qsTK5-92eL0Q=s900-c-k-c0x00ffffff-no-rj',
      desc: 'Artist',
    },
    {
      title: 'Liked Songs',
      image:
        'https://i1.sndcdn.com/artworks-y6qitUuZoS6y8LQo-5s2pPA-t500x500.jpg',
      desc: 'Artist',
    },
    {
      title: 'Anuv Jain',
      image: 'https://i.scdn.co/image/ab67616100005174a837a6cb82dd949d5e1f9b53',
      desc: 'Artist',
    },
    {
      title: 'M Zee Bella',
      image:
        'https://images.genius.com/71fefbe3aa0d388a36be6602ac1d2056.640x640x1.jpg',
      desc: 'Artist',
    },
    {
      title: 'Diljit Dosanjh',
      image:
        'https://c.ndtvimg.com/2023-10/km1qj2u8_diljit_625x300_23_October_23.jpg?im=FaceCrop,algorithm=dnn,width=384,height=384',
      desc: 'Artist',
    },
    {
      title: 'Arijit Singh',
      image:
        'https://a10.gaanacdn.com/gn_img/artists/Dk9KNk23Bx/k9KNqJJbBx/size_xl_1638898900.webp',
      desc: 'Artist',
    },
    {
      title: 'Kr$na',
      image:
        'https://yt3.googleusercontent.com/ytc/AIf8zZSXMsDfcmB-Olaqu_0av1XFlHq5S5qsTK5-92eL0Q=s900-c-k-c0x00ffffff-no-rj',
      desc: 'Artist',
    },
    {
      title: 'Liked Songs',
      image:
        'https://i1.sndcdn.com/artworks-y6qitUuZoS6y8LQo-5s2pPA-t500x500.jpg',
      desc: 'Artist',
    },
    {
      title: 'Anuv Jain',
      image: 'https://i.scdn.co/image/ab67616100005174a837a6cb82dd949d5e1f9b53',
      desc: 'Artist',
    },
    {
      title: 'M Zee Bella',
      image:
        'https://images.genius.com/71fefbe3aa0d388a36be6602ac1d2056.640x640x1.jpg',
      desc: 'Artist',
    },
    {
      title: 'Diljit Dosanjh',
      image:
        'https://c.ndtvimg.com/2023-10/km1qj2u8_diljit_625x300_23_October_23.jpg?im=FaceCrop,algorithm=dnn,width=384,height=384',
      desc: 'Artist',
    },
    {
      title: 'Arijit Singh',
      image:
        'https://a10.gaanacdn.com/gn_img/artists/Dk9KNk23Bx/k9KNqJJbBx/size_xl_1638898900.webp',
      desc: 'Artist',
    },
    {
      title: 'Kr$na',
      image:
        'https://yt3.googleusercontent.com/ytc/AIf8zZSXMsDfcmB-Olaqu_0av1XFlHq5S5qsTK5-92eL0Q=s900-c-k-c0x00ffffff-no-rj',
      desc: 'Artist',
    },
  ];

  return (
    <div className="w-full h-[79%] bg-zinc-900 rounded-[15px] overflow-hidden">
      <div className="text-white w-full h-16 flex justify-start items-center pl-6">
        <LuLibrary size={20} /> &nbsp;{' '}
        <div className="font-semibold pl-8 text-zinc-400">Your Library</div>
      </div>
      <div className="w-full h-full shrink-0 ml-4 overflow-y-scroll">
        {tileData.map((sidebar) => {
          return (
            <div className="h-16 w-[90%] hover:bg-zinc-800 mt-2 rounded-[5px] flex justify-start items-center pl-2 pr-2">
              <img
                src={sidebar.image}
                alt=""
                className="w-[20%] h-[80%] rounded-[8px]"
              />
              <div className="title font-semibold text-sm text-white pl-6">
                {sidebar.title}
                <div className="text-[12px] text-zinc-500">{sidebar.desc}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BottomSideBar;
