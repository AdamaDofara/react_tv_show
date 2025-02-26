import S from "./style.module.css"
export function Logo({image, title, subtitle}){
    return (
        <>
        <div className={S.container}>
            <img className={S.image} src={image}/>
            <span className={S.title}>{title}</span>
        </div>
        <span className={S.subtitle}>{subtitle}</span>
        </>
    );
}