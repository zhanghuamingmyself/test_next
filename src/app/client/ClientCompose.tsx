'use client'

export default function ClientCompose(){

    const onClick = ()=>{
        console.log("123")
    }

    return <div onClick={onClick}>
        客户端组件
    </div>
}
