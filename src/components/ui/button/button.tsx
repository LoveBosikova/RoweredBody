import style from './button.module.scss';

type IButtonProps = {
    text: string;
    link?: string;
}

function Button (props: IButtonProps) {

    const { 
        text,
        link = 'https://t.me/telo_v_resurse/',
    } = props

    return (
        <button className={style.button}> 
            <a className={style.link} href={link} target='_blank'>
                <p className={style.text}> {text}</p>
            </a>
        </button>
    )
}

export default Button