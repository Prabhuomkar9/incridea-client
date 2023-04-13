import TeamCard from '@/src/components/pages/about/TeamCard';
import { NextPage } from 'next';

const Team: NextPage = () => {
  return (
    <div className="pt-28 pb-10 min-h-screen bg-gradient-to-bl from-[#41acc9]  via-[#075985] to-[#2d6aa6]">
      <h1 className="text-3xl lg:text-5xl font-bold text-white text-center titleFont">
        Incridea&apos;s Code Wizards
      </h1>
      <p className="text-lg lg:text-2xl font-bold text-white text-center bodyFont mb-10">
        Meet the developers
      </p>
      <div className="flex justify-center flex-wrap gap-10 max-w-7xl mx-auto px-2">
        {TeamMembers.map((member) => (
          <TeamCard
            key={member.name}
            name={member.name}
            role={member.role}
            image={member.image}
            linkedin={member.linkedin}
            instagram={member.instagram}
            github={member.github}
            quote={member.quote}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;

const TeamMembers = [
  {
    name: 'Swasthik Shetty',
    role: 'Technical Head | Full Stack Developer',
    image: '/team/swasthik.jpeg',
    github: 'swasthikshetty10',
    linkedin: 'swasthikshetty10',
    instagram: 'https://youtu.be/_3wkyerSBpw',
    quote: ``,
  },
  {
    name: 'Nagaraj Pandith',
    role: 'Frontend Lead | Developer',
    image: '/team/nagaraj.jpg',
    github: 'nagarajpandith',
    linkedin: 'nagaraj-pandith',
    instagram: 'nagarajpandithh',
    quote:
      'Never Gonna Give you up, Never gonna let you down. Never gonna run around and desert you.',
  },
  {
    name: 'Prayag Sharma',
    role: 'Technical Head | Management',
    image: '/team/prayag.jpg',
    github: 'prg2308',
    linkedin: 'prg2308',
    instagram: 'prg2308',
    quote: `Hey there I'm using WhatsApp`,
  },
  {
    name: 'Numan Naeem',
    role: 'UI Lead | Developer',
    image: '/team/numan.jpg',
    github: 'numannaeem',
    linkedin: 'numxn',
    instagram: 'num4n_',
    quote: 'Naatil evdeya?',
  },
  {
    name: 'Satvik Nayak',
    role: 'Frontend Developer',
    image: '/team/satvik.jpg',
    github: 'satviknayak',
    linkedin: 'satviksnayak',
    instagram: '_static.n',
    quote: `You hear someone laughing, that's me!`,
  },
  {
    name: 'Aaron Nazareth',
    role: 'Backend Developer',
    image: '/team/aaron.jpg',
    github: 'jevil25',
    linkedin: 'aaron-nazareth-6580311b6',
    instagram: 'aaron_naz25',
    quote: 'Engineer itseems ~ Aaron',
  },
  {
    name: 'Keerthan N S',
    role: 'Frontend Developer',
    image: '/team/keerthan.jpeg',
    github: 'keerthan2002',
    linkedin: 'keerthan-n-s-220142208',
    instagram: 'keerthan_ns',
    quote: 'Why fall in love when you can fall asleep?',
  },
  {
    name: 'Kumar Ankush',
    role: 'Frontend Developer',
    image: '/team/ankush.jpg',
    github: 'geekyAnkush',
    linkedin: 'kumar-ankush-57596118b',
    instagram: 'urbanlegend_ankush',
    quote: 'They asked me to write something. So here it is: Something',
  },
  {
    name: 'Padmashree Shetty',
    role: 'Backend Developer',
    image: '/team/padmashree.jpg',
    github: 'padmashreeshetty123',
    linkedin: 'padmashree-shetty-1298b2228',
    instagram: 'padmashree_shetty1',
    quote: '',
  },
];