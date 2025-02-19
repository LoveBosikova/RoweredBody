import style from './caseCard.module.scss'

type ICaseCardProps = {
    case: {
        name: string,
        titleBefore: string,
        textBefore: string[],
        imageBefore: string, 
        imageAfter: string,  
        titleAfter: string,
        textAfter: string[]
    }
}

function CaseCard (props: ICaseCardProps) {
    const {
        name,
        titleBefore,
        textBefore,
        imageBefore,
        imageAfter,
        titleAfter,
        textAfter
    } = props.case

    return (
        <div className={style.caseCard}>
            <div className={style.imgsWrap}>
                <div className={style.photoWrap}>
                    <p className={style.photoText}>До</p>
                    <div className={style.imgWrap}>
                        <img className={style.img} src={imageBefore} alt={titleBefore} />
                    </div>
                </div>
                <div className={style.photoWrap}>
                    <p className={style.photoText}>После</p>
                    <div className={style.imgWrap}>
                        <img className={style.img} src={imageAfter} alt={titleAfter} />
                    </div>
                </div>
            </div>
            <div className={style.textSide}>
                <h3 className={style.name}>{name}</h3>
                <div className={style.pointBefore}>
                    <p className={style.data}>{titleBefore}</p>
                    <ul>
                        {textBefore.map((text) => <li className={style.point}>{text}</li>)}
                    </ul>
                </div>
                <div className={style.pointAfter}>
                    <p className={style.data}>{titleAfter}</p>
                    <ul>
                        {textAfter.map((text) => <li className={style.point}>{text}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CaseCard