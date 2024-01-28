import React from 'react';

function MadeforAbhdi({ title }) {
  const dailymixdata = [
    {
      title: 'Daily Mix 1',
      image:
        'https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebcb6926f44f620555ba444fca/1/en/default',
      desc: 'King Pritam Raftar Abhishek',
    },
    {
      title: 'Daily Mix 2',
      image:
        'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb210ea26772fd08017ba2cf42/2/en/default',
      desc: 'King Pritam Raftar Abhishek',
    },
    {
      title: 'Daily Mix 3',
      image:
        'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eba00b11c129b27a88fc72f36b/3/en/default',
      desc: 'King Pritam Raftar Abhishek',
    },
    {
      title: 'Daily Mix 4',
      image:
        'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb7da39dea0a72f581535fb11f/4/en/default',
      desc: 'King Pritam Raftar Abhishek',
    },
    {
      title: 'Daily Mix 5',
      image:
        'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb989ed05e1f0570cc4726c2d3/5/en/default',
      desc: 'King Pritam Raftar Abhishek',
    },

    {
      title: 'Daily Mix 6',
      image:
        'https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebae07171f989fb39736674113/6/en/default',
      desc: 'King Pritam Raftar Abhishek',
    },
  ];
  return (
    <div className="pt-6 mb-3 ml-5 mr-5">
      <div className="text-2xl font-bold">{title}</div>
      <div className="playbutton w-[55px] h-[55px] rounded-full absolute top-[0px] right-[0px] bg-green-400">
        asdf
      </div>
      <div className="w-full h-64 mt-3 flex justify-center items-center">
        {dailymixdata.map((dailymix) => {
          return (
            <div className="w-1/6 h-full mr-6 rounded-[10px] bg-zinc-800 hover:bg-zinc-700">
              <div className="img h-4/6 w-full p-3">
                <img
                  src={dailymix.image}
                  alt=""
                  className="w-full h-full rounded-[10px]"
                />
              </div>
              <div className="title pl-4 text-[15px] font-semibold">
                {dailymix.title}
              </div>

              <div className="desc text-[13px] text-zinc-400 pl-4 pt-2 h-[50px] overflow-hidden">
                {dailymix.desc}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MadeforAbhdi;
