import Image from "next/image";
import { readFileSync } from 'fs'
import path from "path"
export default function Home() {
    let user = readFileSync(path.join(process.cwd(), 'data', `user.json`), 'utf-8')
    // const click = async () => {
    //     const res = await fetch('/api/hello')
    //     const json = await res.json()
    //     console.log(user);
    //     user = JSON.stringify(json)
    // }
    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <div>{user}</div>
            {/*<div onClick={click}>{user}</div>*/}
            <Image
                className="dark:invert"
                src="/static/next.svg"
                alt="Next.js logo"
                width={180}
                height={38}
                priority
            />
        </div>
    );
}
