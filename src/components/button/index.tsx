const Button = ({clickHandler=()=>{},text='Click me!',classes=''}) => {
    return (
        <button className={`inline-block rounded ring ring-pink-500 ring-offset-2 ring-offset-slate-50 dark:ring-offset-slate-900 ${classes}`} onClick={clickHandler}>{text}</button>
    );
}
export default Button;