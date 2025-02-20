import style from './button.module.scss';

type IButtonProps = {
    text: string;
}

function Button (props: IButtonProps) {
    const { text } = props
    return (
        <button className={style.button}> 
            <a className={style.link} href='https://t.me/telo_v_resurse'>
                <p className={style.text}> {text}</p>
            </a>
        </button>
    )
}

export default Button