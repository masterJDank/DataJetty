
interface PageTitleDescriptionProps{

    title:string,
    description?:String
}


export default function PageTitleDescription({title='Page Title',description=''}:PageTitleDescriptionProps){
    return (<div>

        <div className="text-[20px]" >
            {title}
        </div>
        <div className="text-[14px] text-gray-500" > 
            {description}
        </div>
        

    </div>)
}