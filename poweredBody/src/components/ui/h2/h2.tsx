import style from './h2.module.scss';

type IH2Props = {
    text: string;
}

function H2 (props: IH2Props) {
    const { text } = props
    return (
        <h2 className={style.h2}>{text}</h2>
    )
}

export default H2