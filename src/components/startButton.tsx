import Image from "next/image";

export default function StartButton(){
    return(
        <button className="startButton">
            <Image className="startButton--img"
                src="/windows-logo.png"
                width={18}
                height={18}
                alt="Start"
            />
            <div className="startButton--text">
                Start
            </div>
        </button>
    )
}