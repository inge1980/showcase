import Button from '@/components/button';

const Card = ({title='New title', desc='This is a card..', button='Click me!', clickHandler=()=>{}}) => {
    return (
        <>
        <div className="inline-block align-baseline rounded-lg bg-slate-500 p-6 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white items-stretch h-full relative">
            <h5 className="mb-2 text-xl font-medium leading-tight">{title}</h5>
            <p className="mb-4 text-base">
            {desc}
            </p>
            <Button clickHandler={clickHandler} text={button} classes='absolute bottom-3' />
        </div>
        </>
    );
  }
  
  export default Card;