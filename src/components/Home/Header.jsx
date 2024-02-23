import HomeHeaderSVG from '/home-header.svg';

export default function Header() {
  return (
    <header className="flex flex-col items-start justify-center">
      <img src={HomeHeaderSVG} alt="Home Header" className="mx-auto"/>
      <div className='mx-16'>
        <h1 className='font-bold'>hello you</h1>
        <p>you lack of memory wanna remember something ?</p>
      </div>
      
    </header>
  );
}
