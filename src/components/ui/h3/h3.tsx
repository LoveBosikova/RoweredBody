import style from './h3.module.scss';

type IH3Props = {
    text: string;
}

function H3 (props: IH3Props) {
    const { text } = props
    return (
        <h3 className={style.h3}>{text}</h3>
    )
}

export default H3