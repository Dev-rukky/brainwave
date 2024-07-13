import ButtonGradient from './assets/svg/ButtonGradient';
import Button from './components/Button';

const App = () => {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
          <Button className='mt-10' href='#login'>
            something
          </Button>
        </div>
        <ButtonGradient />
      </div>
    </>
  );
};

export default App
